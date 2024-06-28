import { SingleLineChrt } from '../app/Components/Atoms/SingleLineChrt';
import { MultiLineChrt } from '../app/Components/Atoms/MultiLineChrt';
import { RadarChrt } from '../app/Components/Atoms/RadarChrt';
import { Map } from '../app/Components/Atoms/Map';
import { BarChrt } from '../app/Components/Atoms/BarChrt';
import { PieChrt } from '../app/Components/Atoms/PieChrt';
import { Categories } from './categories';
import tempforecast from './data/tempforecast.json';
import { useState, useEffect } from 'react';

// URLs of the API endpoint
const temperatureURL = 'http://localhost:8080/api/weather/temperature'


  
// Displayed charts in order
export const charts = [
  { component: <PieChrt title='Air' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Weather, Categories.Traffic], colSpan: 1 },
  { component: <MultiLineChrt title='Air Pollution' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Weather], colSpan: 2 },
  { component: <SingleLineChrt title='Humidity' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <RadarChrt title='Radar' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <BarChrt title='Temperature' subtitle='(°C)' URL= {temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <Map title='Hamburg' subtitle='today' />, categories: [Categories.Traffic], colSpan: 3 },
  { component: <MultiLineChrt title='Air Pollution' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <MultiLineChrt title='Co2 Concentration' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Parking], colSpan: 2 },
  { component: <PieChrt title='Air' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Weather], colSpan: 2 },
  { component: <MultiLineChrt title='Wind Speed' subtitle='(KM/H)' URL= {temperatureURL} />, categories: [Categories.Traffic], colSpan: 1 },
  { component: <SingleLineChrt title='Humidity' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <MultiLineChrt title='Wind Speed' subtitle='(KM/H)' URL= {temperatureURL} />, categories: [Categories.Traffic], colSpan: 2 },
  { component: <BarChrt title='Temperature' subtitle='(°C)'  URL= {temperatureURL}/>, categories: [Categories.Weather], colSpan: 2 },
  { component: <RadarChrt title='Radar' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <Map title='Hamburg' subtitle='today' />, categories: [Categories.Traffic], colSpan: 3 },
  { component: <MultiLineChrt title='CO2 Concentration' subtitle='(%)' URL= {temperatureURL} />, categories: [Categories.Parking], colSpan: 2 },
  // { component: <iframe src="https://www.wetteronline.de/wetter/wedel" title="W3Schools Free Online Web Tutorials" className='w-full h-[800px]'></iframe>, categories: [Categories.Parking], colSpan: 3 },
];