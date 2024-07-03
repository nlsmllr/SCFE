import { SingleLineChrt } from '../app/Components/Atoms/SingleLineChrt';
import { MultiLineChrt } from '../app/Components/Atoms/MultiLineChrt';
import { RadarChrt } from '../app/Components/Atoms/RadarChrt';
import { Map } from '../app/Components/Atoms/Map';
import { BarChrt } from '../app/Components/Atoms/BarChrt';
import { PieChrt } from '../app/Components/Atoms/PieChrt';
import TrashCalendar from '@/app/Components/Atoms/TrashCalendar';
import { Categories } from './categories';
import WeatherCard from '@/app/Components/Atoms/WeatherCard';
import {AirQuality} from '@/app/Components/Atoms/AirQuality';


// URLs of the API endpoint
const HOST_NAME = 'http://localhost:8080'
const weatherAPI = HOST_NAME + "/api/weather";
const mapAPI = HOST_NAME + "/api/map";
const airAPI = HOST_NAME + "/api/air";
const temperatureURL = HOST_NAME + "/api/weather/temperature";

// Displayed charts in order
export const charts = [
  { component: <WeatherCard title='Aktuelles Wetter' subtitle='Wedel' />, categories: [Categories.Parking], colSpan: 1 },
  { component: <BarChrt title='Temperatur' unit='(°C)' URL= {weatherAPI + "/temperature"} />, categories: [Categories.Weather], colSpan: 2 },

  { component: <BarChrt title='Luftfeutigkeit' unit='(%)' URL= {weatherAPI + "/humidity"} />, categories: [Categories.Weather], colSpan: 2 },
  { component: <TrashCalendar title='Müllabfuhrkalendar' subtitle='Wedel'/>, categories: [Categories.Trash], colSpan: 1 },

  { component: <BarChrt title='⌀ Sichtweite' unit='(M)' URL= {weatherAPI + "/visibility"} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <BarChrt title='Luftdruck' unit='(hPa)'  URL= {weatherAPI + "/pressure"} />, categories: [Categories.Weather], colSpan: 2 },
  

  { component: <BarChrt title='Windgeschwindigkeit' unit='(meter/sec)'  URL= {weatherAPI + "/wind_speed"}  />, categories: [Categories.Weather], colSpan: 2 },
  { component: <BarChrt title='Windböen' unit='(meter/sec)'  URL= {weatherAPI + "/wind_gust"}  />, categories: [Categories.Weather], colSpan: 1 },
  { component: <BarChrt title=' Atmosphärischer Druck auf dem Meeresspiegel' unit='(hPa)'  URL= {weatherAPI + "/sea_level"}  />, categories: [Categories.Weather], colSpan: 1 },
  { component: <AirQuality title='Luftqualität' subtitle='Wedel'URL= {airAPI + "/air_quality"}/>, categories: [Categories.Parking], colSpan: 2 },
  { component: <Map title='Karte' subtitle='Wedel' geojsonUrls={[
      { url: mapAPI + "/parking_spaces", label: 'Parkplätze', color:'#000FFF', },
      { url: mapAPI + "/charging_stations", label: 'Ladesäulen', color:'#0F0FFF', },
      { url: mapAPI + "/water_refill", label: 'Trinkwasserspender', color:'#00FFFF', },
      { url: mapAPI + "/heat/suitable_areas", label: 'Wärmekarte 1',color:'#FF00FF', },
      { url: mapAPI + "/heat/additional_areas", label: 'Wärmekarte 2',color:'#FF000F'}]}/>,
       categories: [Categories.Traffic], colSpan: 3 },
  
  { component: <MultiLineChrt title='Air Pollution' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <MultiLineChrt title='Co2 Concentration' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Parking], colSpan: 2 },
  { component: <PieChrt title='Air' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather], colSpan: 2 },
  { component: <MultiLineChrt title='Wind Speed' subtitle='(KM/H)' URL={temperatureURL} />, categories: [Categories.Traffic], colSpan: 1 },
  { component: <SingleLineChrt title='Humidity' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <MultiLineChrt title='Wind Speed' subtitle='(KM/H)' URL={temperatureURL} />, categories: [Categories.Traffic], colSpan: 2 },
  { component: <BarChrt title='Temperature' unit='(°C)' URL={temperatureURL} />, categories: [Categories.Weather], colSpan: 2 },
  { component: <RadarChrt title='Radar' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather], colSpan: 1 },
  { component: <MultiLineChrt title='CO2 Concentration' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Parking], colSpan: 2 },  
  { component: <PieChrt title='Air' subtitle='(%)' URL={temperatureURL} />, categories: [Categories.Weather, Categories.Traffic], colSpan: 1 },

];