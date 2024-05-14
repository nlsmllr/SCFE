"use client"

import React, { Component } from 'react';
import './globals.css';

import { Example } from './Components/Atoms/Example';
import { NewExample } from './Components/Atoms/NewExample';
import { TopBar } from './Components/Atoms/TopBar';
import { RadChart } from './Components/Atoms/RadChart';
import { Map } from './Components/Atoms/Map';
// import { BurgerMenu } from './Components/Atoms/BurgerMenu';
import 'leaflet/dist/leaflet.css';



export default function Void() {
  return (
    <html className='bg-zinc-950'>
      <TopBar />
      {/* <BurgerMenu /> */}
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
        <div className=" md:col-span-4">
          <NewExample />
        </div>
        <div className=" md:col-span-1">
          <NewExample />
        </div>
        <div className=" md:col-span-5">
          <NewExample />
        </div>
        {/* <div className="graphBox col-span-2">
          <Map />
        </div> */}
      </section>
    </html>
  );
}