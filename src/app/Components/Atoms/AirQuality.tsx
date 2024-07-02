import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer} from 'recharts';
  
  interface AirQualityData {
    aqi: number;
    components: {
      co: number;
      no: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      nh3: number;
    };
  }
  
  const airQualityLevels = [
    { level: 1, description: 'Gut', color: 'bg-green-500' },
    { level: 2, description: 'Mittelmäßig', color: 'bg-yellow-500' },
    { level: 3, description: 'Moderat', color: 'bg-orange-500' },
    { level: 4, description: 'Schlecht', color: 'bg-red-500' },
    { level: 5, description: 'Sehr Schlecht', color: 'bg-purple-500' },
  ];
  

  
export const AirQuality = ({ title, subtitle, URL }: { title: string, subtitle: string, URL: string}) => {
    const [airQualityData, setAirQualityData] = useState<AirQualityData | null>(null);
  
    useEffect(() => {
      fetch(URL)
        .then(response => response.json())
        .then(data => setAirQualityData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    if (!airQualityData) {
      return <div>Loading...</div>;
    }
  
    const airQuality = airQualityLevels.find(level => level.level === airQualityData.aqi);
  
    if (!airQuality) {
      return <div className="text-gray-700">Ungültiger AQI-Wert</div>;
    }
  
    const componentsData = [
     
      { name: 'NO', value: airQualityData.components.no, fill: '#83a6ed' },
      { name: 'SO2', value: airQualityData.components.so2, fill: '#a4de6c' },
      { name: 'PM2.5', value: airQualityData.components.pm2_5, fill: '#d0ed57' },
      { name: 'PM10', value: airQualityData.components.pm10, fill: '#ffc658' },
      { name: 'NH3', value: airQualityData.components.nh3, fill: '#ff8042' },
      { name: 'NO2', value: airQualityData.components.no2, fill: '#8dd1e1' },
    ];

    //μg/m3

    const tooltipFormatter = (value: any) => {
        return `${value} ${'ug/m^3'}`;
      };

      return (
        <div className="graphBox">
          <div className='flex flex-row items-baseline pb-6'>
            <h4 className='graphTitle'>{title}</h4>
            <p className='graphSubtitle'>{subtitle}</p>
          </div>
          <ResponsiveContainer width={'100%'} height={250}>
            <RadialBarChart
                  cx='50%'
                  cy='50%'
                  innerRadius='0%'
                  outerRadius='110%'
                  barSize={10}
                  startAngle={180} 
                  endAngle={0}
                  data={componentsData}
            >
              <RadialBar 
                minAngle={15} 
                label={{ position: 'insideStart', fill: '#fff' }} 
                background 
                clockWise={true}
                dataKey="value" 
              />
              <Legend 
                iconSize={10} 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center" 
              />
              <Tooltip formatter={tooltipFormatter} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className={`p-4 rounded-md text-white ${airQuality.color}`}> 
            <p className="text-lg">Level: {airQuality.description}</p> 
            <p className="text-lg">CO: {airQualityData.components.co}</p> 
            <p className="text-lg">O3: {airQualityData.components.o3}</p> 
            </div>
        </div>

      );
    };
