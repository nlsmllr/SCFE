import { SingleLineChrt } from '../app/Components/Atoms/SingleLineChrt';
import { MultiLineChrt } from '../app/Components/Atoms/MultiLineChrt';
import { RadarChrt } from '../app/Components/Atoms/RadarChrt';
import { Map } from '../app/Components/Atoms/Map';
import { BarChrt } from '../app/Components/Atoms/BarChrt';
import { PieChrt } from '../app/Components/Atoms/PieChrt';
import TrashCalendar from '@/app/Components/Atoms/TrashCalendar';
import { Categories } from './categories';
import { useState, useEffect } from 'react';
import WeatherCard from '@/app/Components/Atoms/WeatherCard';


// URLs of the API endpoint
const weatherAPI = 'http://localhost:8080/api/weather/';
const temperatureURL = weatherAPI + "temperature";//'http://localhost:8080/api/weather/temperature'

// Displayed charts in order
export const charts = [
  { component: <WeatherCard title='Aktuelles Wetter' subtitle='Wedel' />, categories: [Categories.Weather], colSpan: 1 },
  { component: <BarChrt title='Temperatur' unit='(°C)' URL= {weatherAPI + "temperature"} />, categories: [Categories.Weather], colSpan: 2 },

  { component: <BarChrt title='Luftfeutigkeit' unit='(%)' URL= {weatherAPI + "humidity"} />, categories: [Categories.Weather], colSpan: 2 },
  { component: <TrashCalendar title='Müllabfuhrkalendar' subtitle='Wedel'/>, categories: [Categories.Trash], colSpan: 1 },

  { component: <BarChrt title='⌀ Sichtweite' unit='(M)' URL= {weatherAPI + "visibility"} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <BarChrt title='Luftdruck' unit='(hPa)'  URL= {weatherAPI + "pressure"} />, categories: [Categories.Weather], colSpan: 2 },
  
  { component: <BarChrt title='Windgeschwindigkeit' unit='(meter/sec)'  URL= {weatherAPI + "windspeed"}  />, categories: [Categories.Weather], colSpan: 2 },
  { component: <BarChrt title='Windböen' unit='(meter/sec)'  URL= {weatherAPI + "windgust"}  />, categories: [Categories.Weather], colSpan: 1 },
  
  //{ component: <BarChrt title=' Atmosphärischer Druck auf dem Meeresspiegel' unit='(hPa)'  URL= {weatherAPI + "sealevel"}  />, categories: [Categories.Weather], colSpan: 1 },

  { component: <Map title='Eignungsgebiete Wärme in Wedel' subtitle='Ohne Sammelanschluss' geojsonUrl="http://localhost:8080/api/map/suitable_areas"/>, categories: [Categories.Traffic], colSpan: 3 },


  { component: <MultiLineChrt title='Air Pollution' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <MultiLineChrt title='Co2 Concentration' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Parking], colSpan: 2 },
  { component: <PieChrt title='Air' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather], colSpan: 2 },
  { component: <MultiLineChrt title='Wind Speed' subtitle='(KM/H)' URL={temperatureURL} />, categories: [Categories.Traffic], colSpan: 1 },
  { component: <SingleLineChrt title='Humidity' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <MultiLineChrt title='Wind Speed' subtitle='(KM/H)' URL={temperatureURL} />, categories: [Categories.Traffic], colSpan: 2 },
  { component: <BarChrt title='Temperature' unit='(°C)'  URL= {temperatureURL}/>, categories: [Categories.Weather], colSpan: 2 },
  { component: <RadarChrt title='Radar' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <Map title='Zusätzliche Eignungsgebiete in Wedel' subtitle='Ohne Sammelanschluss' geojsonUrl="http://localhost:8080/api/map/additional_areas"/>, categories: [Categories.Traffic], colSpan: 3 },
  { component: <MultiLineChrt title='CO2 Concentration' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Parking], colSpan: 2 },  
  { component: <PieChrt title='Air' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather, Categories.Traffic], colSpan: 1 },

];