"use client";

import React, { useState, useEffect } from 'react';
import './globals.css';

import { TopBar } from './Components/Molecules/TopBar';
import { SingleLineChrt } from './Components/Atoms/SingleLineChrt';
import { MultiLineChrt } from './Components/Atoms/MultiLineChrt';
import { RadarChrt } from './Components/Atoms/RadarChrt';
import { Map } from './Components/Atoms/Map';
import { BarChrt } from './Components/Atoms/BarChrt';
import 'leaflet/dist/leaflet.css';
import { PieChrt } from './Components/Atoms/PieChrt';
import { Sidebar } from './Components/Molecules/Sidebar';

export default function Void() {
  const [showText, setShowText] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2500); // Duration must match the CSS animation duration

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html className='bg-zinc-950'>
      <body className="min-h-screen">
        {showText && (
          <div className="bg-opacity-75 bg-black md:backdrop-blur fixed inset-0 flex flex-col justify-center items-center md:bg-transparent fade-text">
            <h1 className="inter-h1 uppercase text-center text-white">Smart Cities</h1>
          </div>
        )}
        
        <TopBar />

        <Sidebar 
          categories={['Weather', 'Parking', 'Stuff']} 
          isOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />

        <section className={`graphContainer flex justify-center ${isSidebarOpen ? 'shifted' : ''}`}>
          <div className="md:col-span-2">
            <PieChrt title='Air' subtitle='(%)' />
          </div>

          <div className="md:col-span-3">
            <MultiLineChrt title='Air Pollution' subtitle='(%)' />
          </div>

          <div className="md:col-span-2">
            <SingleLineChrt title='Humidity' subtitle='(%)' />
          </div>

          <div className="md:col-span-1">
            <RadarChrt title='Radar' subtitle='(%)' />
          </div>

          <div className="md:col-span-2">
            <BarChrt title='Temperature' subtitle='(°C)' />
          </div>

          <div className="md:col-span-5">
            <Map />
          </div>

          <div className="md:col-span-2">
            <MultiLineChrt title='CO2 Concentration' subtitle='(%)' />
          </div>

          <div className="md:col-span-3">
            <MultiLineChrt title='Wind Speed' subtitle='(KM/H)' />
          </div>
        </section>
      </body>
    </html>
  );
}
