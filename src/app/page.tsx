"use client"

import React, { useState, useEffect } from 'react';
import './globals.css';

import { TopBar } from './Components/Molecules/Header';
import { SingleLineChrt } from './Components/Atoms/SingleLineChrt';
import { MultiLineChrt } from './Components/Atoms/MultiLineChrt';
import { RadarChrt } from './Components/Atoms/RadarChrt';
import { Map } from './Components/Atoms/Map';
import { BarChrt } from './Components/Atoms/BarChrt';
import 'leaflet/dist/leaflet.css';
import { PieChrt } from './Components/Atoms/PieChrt';
import { Filler } from './Components/Atoms/Fillers';
import { Sidebar } from './Components/Molecules/Sidebar';
import { Footer } from './Components/Molecules/Footer';
import { Categories } from './../Constants/categories';
import { motion, AnimatePresence } from 'framer-motion';

const Placeholder = ({ colSpan }: { colSpan: number }) => (
  <div className={`col-span-${colSpan} placeholder-box`} />
);

export default function Void() {
  const [showText, setShowText] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Categories | 'All' | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2500); // Duration must match the CSS animation duration

    return () => clearTimeout(timer);
  }, []);

  const handleCategorySelect = (category: Categories | 'All') => {
    setSelectedCategory(category);
  };

  const charts = [
    { component: <PieChrt title='Air' subtitle='(%)' category={[Categories.Weather]} />, categories: [Categories.Weather], colSpan: 1 },
    { component: <MultiLineChrt title='Air Pollution' subtitle='(%)' />, categories: [Categories.Weather], colSpan: 2 },
    { component: <SingleLineChrt title='Humidity' subtitle='(%)' />, categories: [Categories.Weather], colSpan: 1 },
    { component: <RadarChrt title='Radar' subtitle='(%)' />, categories: [Categories.Weather], colSpan: 1 },
    { component: <BarChrt title='Temperature' subtitle='(°C)' />, categories: [Categories.Weather], colSpan: 1 },
    { component: <Map />, categories: [Categories.Stuff], colSpan: 3 },
    { component: <MultiLineChrt title='CO2 Concentration' subtitle='(%)' />, categories: [Categories.Parking], colSpan: 2 },
    { component: <MultiLineChrt title='Wind Speed' subtitle='(KM/H)' />, categories: [Categories.Stuff], colSpan: 1 },
    { component: <PieChrt title='Air' subtitle='(%)' category={[Categories.Weather]} />, categories: [Categories.Weather], colSpan: 2 },
    { component: <MultiLineChrt title='Air Pollution' subtitle='(%)' />, categories: [Categories.Weather], colSpan: 1 },
    { component: <SingleLineChrt title='Humidity' subtitle='(%)' />, categories: [Categories.Weather], colSpan: 1 },
    { component: <RadarChrt title='Radar' subtitle='(%)' />, categories: [Categories.Weather], colSpan: 1 },
    { component: <BarChrt title='Temperature' subtitle='(°C)' />, categories: [Categories.Weather], colSpan: 1 },
    { component: <Map />, categories: [Categories.Stuff], colSpan: 3 },
    { component: <MultiLineChrt title='CO2 Concentration' subtitle='(%)' />, categories: [Categories.Parking], colSpan: 2 },
    { component: <MultiLineChrt title='Wind Speed' subtitle='(KM/H)' />, categories: [Categories.Stuff], colSpan: 1 },
  ];

  const filteredCharts = selectedCategory && selectedCategory !== 'All'
    ? charts.filter(chart => chart.categories.includes(selectedCategory))
    : charts;



  const addFillers = (charts: string | any[]) => {
    const filledCharts = [];
    let spanCount = 0;

    for (let i = 0; i < charts.length; i++) {
      // Check if there are three consecutive charts with col-span-1
      if (i < charts.length - 2 &&
          charts[i].colSpan === 1 &&
          charts[i + 1].colSpan === 1 &&
          charts[i + 2].colSpan === 1) {
        filledCharts.push(charts[i]);
        spanCount += charts[i].colSpan;
        continue;
      }

      filledCharts.push(charts[i]);
      spanCount += charts[i].colSpan;

      // Condition to check for fillers
      if (i < charts.length - 1) {
        const nextSpan = charts[i + 1].colSpan;
        if (spanCount % 3 !== 0 && nextSpan < 3 && spanCount % 3 + nextSpan !== 3) {
          const fillerSpan = 3 - (spanCount % 3);
          filledCharts.push({ component: <Filler />, colSpan: fillerSpan });
          spanCount += fillerSpan;
        }
      }
    }

    return filledCharts;
  };



  
  const filledCharts = addFillers(filteredCharts);

  return (
    <html className='html'>
      <body className="min-h-screen">
        {showText && (
          <div className="fadeInTextBG">
            <h1 className="fadeInText">Smart Cities</h1>
          </div>
        )}
        <TopBar />

        <div className="relative group">
          <Sidebar categories={['All', Categories.Weather, Categories.Parking, Categories.Stuff]} onCategorySelect={handleCategorySelect} />
          <section className="graphContainer flex justify-center">
            <AnimatePresence>
              {filledCharts.length > 0 ? (
                filledCharts.map((chart, index) => (
                  <motion.div
                    key={index}
                    className={`col-span-${chart.colSpan}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    layout
                  >
                    {chart.component}
                  </motion.div>
                ))
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Select a category to view the charts
                </motion.p>
              )}
            </AnimatePresence>
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
