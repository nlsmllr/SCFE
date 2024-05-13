"use client"

import React from 'react';
import './globals.css';

import { Example } from './Components/Atoms/Example';
import { NewExample } from './Components/Atoms/NewExample';
import { TopBar } from './Components/Atoms/TopBar';
import { RadChart } from './Components/Atoms/RadChart';
import { Map } from './Components/Atoms/Map';
import 'leaflet/dist/leaflet.css';



export default function Void() {
  return (
    <html className='bg-zinc-950'>
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
        <div className="graphBox md:col-span-4">
          <NewExample />
        </div>
        <div className="graphBox md:col-span-1">
          <NewExample />
        </div>
        <div className="graphBox md:col-span-5">
          <NewExample />
        </div>
        {/* <div className="graphBox col-span-2">
          <Map />
        </div> */}
      </section>
    </html>
  );
}