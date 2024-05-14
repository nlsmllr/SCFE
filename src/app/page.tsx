"use client";

import React, { useState, useEffect } from 'react';
import './globals.css';

import { Example } from './Components/Atoms/Example';
import { NewExample } from './Components/Atoms/NewExample';
import { TopBar } from './Components/Atoms/TopBar';
import { RadChart } from './Components/Atoms/RadChart';
import 'leaflet/dist/leaflet.css';

export default function Void() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 1500); // Duration must match the CSS animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html className='bg-zinc-950'>
      <body className="min-h-screen">
        {showText && (
          <div className="fixed inset-0 flex flex-col justify-center items-center bg-zinc-900 fade-text">
            {/* <img src="./SC_logo.png" alt="SC_logo" className="w-20 h-20 mb-4" /> */}
            <h1 className="inter-h1 text-center italic text-white">Welcome to the Smart Cities Front End</h1>
          </div>
        )}
        <TopBar />
        <section className='graphContainer flex justify-center'>
          <div className="md:col-span-2">
            <Example />
          </div>
          <div className="md:col-span-1">
            <RadChart />
          </div>
          <div className="md:col-span-2">
            <NewExample />
          </div>
          <div className="md:col-span-4">
            <NewExample />
          </div>
          <div className="md:col-span-1">
            <NewExample />
          </div>
          <div className="md:col-span-5">
            <NewExample />
          </div>
          <div className="md:col-span-5">
            <NewExample />
          </div>
          <div className="md:col-span-5">
            <NewExample />
          </div>
          <div className="md:col-span-5">
            <NewExample />
          </div>
          <div className="md:col-span-5">
            <NewExample />
          </div>
          <div className="md:col-span-5">
            <NewExample />
          </div>
          <div className="md:col-span-5">
            <NewExample />
          </div>
        </section>
      </body>
    </html>
  );
}
