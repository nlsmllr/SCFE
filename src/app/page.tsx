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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2500); // Duration must match the CSS animation duration

    return () => clearTimeout(timer);
  }, []);

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
          <Sidebar categories={[Categories.Weather, Categories.Parking, Categories.Stuff]} />
          <section className="graphContainer flex justify-center">
            <div className="md:col-span-2">
              <PieChrt title='Air' subtitle='(%)' category={[Categories.Weather]} />
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
          <Footer />
        </div>
      </body>
    </html>
  );
}
