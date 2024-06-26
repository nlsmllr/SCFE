import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
// import { data } from '../../../Constants/mock-data';
import { useEffect, useState } from 'react';

export const MultiLineChrt = ({ title, subtitle, URL }: { title: string, subtitle: string, URL:string }) => {

    const [data, setData] = useState([]); useEffect(() => {
    // Fetch data from a local JSON file or an API endpoint
    fetch(URL).then(response => response.json()).then(data => setData(data)).catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="graphBox">
      <div className='flex flex-row items-baseline pb-6'>
        <h4 className='graphTitle'>{title}</h4>
        <p className='graphSubtitle'>{subtitle}</p>
      </div>
      <ResponsiveContainer width={'100%'} height={200}>
        <AreaChart

          width={600}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid stroke='' strokeDasharray="3 3" />
          <XAxis stroke="#cfcfcf" dataKey="name" />
          <YAxis stroke="#cfcfcf" />
          <Tooltip />
          <Area // Unten
            animationBegin={1500}
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#cfcfcf"
            fill="#cfcfcf"
          />
          <Area // Mitte
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#6e6e6e"
            fill="#6e6e6e"
            animationBegin={1600}
          />
          <Area // Oben
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#5bbd82"
            fill="#5bbd82"
            animationBegin={1700}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};