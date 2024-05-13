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
      <nav>
        <TopBar />
      </nav>
      <section className='graphContainer flex justify-center'>
        <div className="graphBox col-span-2">
          <Example />
        </div>
        <div className="graphBox col-span-1">
          <RadChart />
        </div>
        <div className="graphBox col-span-2">
          <NewExample />
        </div>
        <div className="graphBox col-span-3">
          <NewExample />
        </div>
        {/* <div className="graphBox col-span-2">
          <Map />
        </div> */}
      </section>
    </html>
  );
}