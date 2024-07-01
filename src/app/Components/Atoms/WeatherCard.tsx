import React, { useEffect, useState } from 'react';

export interface Weather {
    stadt: string;
    beschreibung: string;
    icon: string;
    temperatur: number;
    maxTemperatur: number;
    minTemperatur: number;
  }
  
  export const fromApiResponse = (data: any): Weather => ({
    stadt: data.Stadt,
    beschreibung: data.Beschreibung,
    icon: data.Icon,
    temperatur: data.Temperatur,
    maxTemperatur: data["Max-Temperatur"],
    minTemperatur: data["Min-Temperatur"],
  });
  
  const WeatherCard = ({ title, subtitle }: { title: string, subtitle: string }) => {
  ///const WeatherCard: React.FC = () => {
    const [weather, setWeather] = useState<Weather | null>(null);
  
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/weather/current/temperature');
          const data = await response.json();
          const weatherData = fromApiResponse(data);
          setWeather(weatherData);
        } catch (error) {
          console.error("Error fetching the weather data", error);
        }
      };
  
      fetchWeather();
    }, []);
  
    if (!weather) {
      return <div>Loading...</div>;
    }
  
    return (
        <div className="graphBox h-full">
        <div className='flex flex-row items-baseline pb-6'>
          <h4 className='graphTitle'>{title}</h4>
          <p className='graphSubtitle'>{weather.stadt}</p>
        </div>
      <div className="bg-gradient-to-b from-blue-900 to-purple-800 text-white p-4 rounded-lg flex flex-col">
        <div className="text-xl font-semibold">{weather.stadt}</div>
        <div className="text-6xl">{Math.round(weather.temperatur)}°</div>
        <div className="flex items-center mt-2">
          <img src={weather.icon} alt={weather.beschreibung} className="w-11 h-11"/>
          <div className="ml-2 text-lg">{weather.beschreibung}</div>
        </div>
        
        <div className="flex items-center mt-2">
          <div>H: {Math.round(weather.maxTemperatur)}°</div>
          <div>T: {Math.round(weather.minTemperatur)}°</div>
        </div>
      </div>
      </div>
    );
  };

  export default WeatherCard;