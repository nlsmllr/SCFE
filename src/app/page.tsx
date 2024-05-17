"use client";

import React, { useState, useEffect } from 'react';
import './globals.css';

import { TopBar } from './Components/Atoms/TopBar';
import { SingleLineChrt } from './Components/Atoms/SingleLineChrt';
import { MultiLineChrt } from './Components/Atoms/MultiLineChrt';
import { RadarChrt } from './Components/Atoms/RadarChrt';
import { Map } from './Components/Atoms/Map';
import { BarChrt } from './Components/Atoms/BarChrt';
import 'leaflet/dist/leaflet.css';
import { PieChrt } from './Components/Atoms/PieChrt';

export default function Void() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2500); // Duration must match the CSS animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html className='bg-zinc-950'>
      <body className="min-h-screen">
        {showText && (
          <div className=" backdrop-blur fixed inset-0 flex flex-col justify-center items-center bg-transparent fade-text">
            {/* <img src="./SC_logo.png" alt="SC_logo" className="w-20 h-20 mb-4" /> */}
            <h1 className="inter-h1 uppercase text-center text-white">Smart Cities</h1>
          </div>
        )}
        <TopBar />
        <section className='graphContainer flex justify-center'>

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
