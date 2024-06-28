import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { pieData01, pieData02 } from '../../../Constants/mock-data';
import { normalize } from 'node:path/win32';
import { useEffect, useState } from 'react';

export const PieChrt = ({ title, subtitle, URL }: { title: string, subtitle: string, URL: string }) => {

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

        <PieChart width={250} height={250}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#cfcfcf" animationBegin={1900} />
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fillOpacity={0.6} fill="#5bbd82" background-opacity={75} label animationBegin={1500} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};