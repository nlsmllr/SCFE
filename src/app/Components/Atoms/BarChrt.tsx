import { XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Label } from 'recharts';
import { useEffect, useState } from 'react';

interface DataItem {
  day: string;
  [key: string]: string | number; // Allows for additional keys if necessary
}

export const BarChrt = ({ title, unit, URL }: { title: string, unit: string, URL: string }) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [domain, setDomain] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    // Fetch data from a local JSON file or an API endpoint
    fetch(URL)
      .then(response => response.json())
      .then((data: DataItem[]) => {
        setData(data);
        updateDomain(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [URL]);

  //Set y-axis dynamicly
  const updateDomain = (data: DataItem[]) => {
    const allValues = data.flatMap(item =>
      Object.entries(item)
        .filter(([key, value]) => key !== 'day' && typeof value === 'string')
        .map(([key, value]) => parseFloat(value as string))
    );

    let minValue = Math.floor(Math.min(...allValues));
    let maxValue = Math.ceil(Math.max(...allValues));
    setDomain([minValue, maxValue]);
  };

  const tooltipFormatter = (value: any) => {
    return `${value} ${unit}`;
  };

  return (
    <div className="graphBox">
      <div className='flex flex-row items-baseline pb-6'>
        <h4 className='graphTitle'>{title}</h4>
        <p className='graphSubtitle'>{unit}</p>
      </div>
      <ResponsiveContainer width={'100%'} height={250}>
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="day" />
          <YAxis type="number" domain={domain as [number, number]} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#333', borderColor: '#333', color: '#fff' }} 
            cursor={{ fill: 'transparent' }}
            formatter={tooltipFormatter}
          />
          <Legend />
          <Bar dataKey="02:00" fill="#00FFFF" animationBegin={1500} />
          <Bar dataKey="08:00" fill="#FF00FF" fillOpacity={0.6} animationBegin={1700} />
          <Bar dataKey="14:00" fill="#FFFF00" fillOpacity={0.6} animationBegin={1700} />
          <Bar dataKey="20:00" fill="#00FF00" fillOpacity={0.6} animationBegin={1700} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
