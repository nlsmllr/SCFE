"use client";

import React, { useState, useEffect } from 'react';
import './globals.css';

import { Example } from './Components/Atoms/Example';
import { NewExample } from './Components/Atoms/NewExample';
import { TopBar } from './Components/Atoms/TopBar';
import { RadChart } from './Components/Atoms/RadChart';
import { Map } from './Components/Atoms/Map';
import { BarCrt } from './Components/Atoms/BarChart';
import 'leaflet/dist/leaflet.css';

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
          <div className=" backdrop-blur-md fixed inset-0 flex flex-col justify-center items-center bg-transparent fade-text">
            {/* <img src="./SC_logo.png" alt="SC_logo" className="w-20 h-20 mb-4" /> */}
            <h1 className="inter-h1 uppercase text-center text-white">Smart Cities</h1>
          </div>
        )}
        <TopBar />
        <section className='graphContainer flex justify-center'>

          <div className="md:col-span-5">
            <NewExample title='Air Pollution' />
          </div>

          <div className="md:col-span-2">
            <Example title='Humidity' />
          </div>
          <div className="md:col-span-1">
            <RadChart title='Radar' />
          </div>
          <div className="md:col-span-2">
            <BarCrt title='Temperature' />
          </div>
          <div className="md:col-span-5">
            <Map />
          </div>
          <div className="md:col-span-2">
            <NewExample title='CO2 Concentration' />
          </div>
          <div className="md:col-span-3">
            <NewExample title='Wind Speed' />
          </div>

        </section>
      </body>
    </html>
  );
}
