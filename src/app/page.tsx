"use client"

import React, { useState, useEffect } from 'react';
import './globals.css';

import { TopBar } from './Components/Molecules/Header';
import 'leaflet/dist/leaflet.css';
import { Sidebar } from './Components/Molecules/Sidebar';
import { Footer } from './Components/Molecules/Footer';
import { Categories } from './../Constants/categories';
import { motion, AnimatePresence } from 'framer-motion';
import { charts } from '../Constants/charts';
import Image from 'next/image';
import logo from './SC_logo.svg';
// import logo from './SC_logo.png';


export default function Void() {
  const [showText, setShowText] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Categories | 'All' | null>(null);

  // Animation at pageload
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2500); // Duration must match the CSS animation duration

    return () => clearTimeout(timer);
  }, []);


  // Filter cagegory
  const handleCategorySelect = (category: Categories | 'All') => {
    setSelectedCategory(category);
  };

  const filteredCharts = selectedCategory && selectedCategory !== 'All'
    ? charts.filter(chart => chart.categories.includes(selectedCategory))
    : charts;

  return (
    <html className='html'>
      <body className="min-h-screen">
        {showText && (
          <div className="fadeInTextBG">
            <Image src={logo} alt="alt Text" height={300}/>
            {/* <h1 className="fadeInText">Smart Cities</h1> */}
          </div>
        )}
        <TopBar /> 

        <div className="relative group">
          <Sidebar categories={['All', Categories.Weather, Categories.Parking, Categories.Traffic]} onCategorySelect={handleCategorySelect} />
          <section className="graphContainer flex justify-center">
            <AnimatePresence>
              {filteredCharts.length > 0 ? (
                filteredCharts.map((chart, index) => (
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
