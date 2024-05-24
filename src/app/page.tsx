// src/page.tsx

"use client";

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
import { Sidebar } from './Components/Molecules/Sidebar';
import { Footer } from './Components/Molecules/Footer';
import { Categories } from './../Constants/categories';

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
            {filteredCharts.length > 0 ? (
              filteredCharts.map((chart, index) => (
                <div key={index} className={`col-span-${chart.colSpan}`}>
                  {chart.component}
                </div>
              ))
            ) : (
              <p>Select a category to view the charts</p>
            )}
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
