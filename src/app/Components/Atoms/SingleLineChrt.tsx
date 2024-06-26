import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, Area } from 'recharts';
import { useEffect, useState } from 'react';

export const SingleLineChrt = ({ title, subtitle, data }: { title: string, subtitle: string, data: any[] }) => {
  const [chartData, setChartData] = useState([]); useEffect(() => { // Since we are importing the data directly, we can set it immediately
    // @ts-expect-error: abc
    setChartData(data); }, []);
  return (
    <div className="graphBox">
      <div className='flex flex-row items-baseline pb-6'>
        <h4 className='graphTitle'>{title}</h4>
        <p className='graphSubtitle'>{subtitle}</p>
      </div>
      <ResponsiveContainer width={'100%'} height={200}>
        <LineChart width={600} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line dot={false} type="natural" dataKey="uv" stroke="#5bbd82" animationBegin={1500}/>
          <CartesianGrid stroke="" strokeDasharray="5 5" />
          <XAxis className='inter-body-sm' stroke='#cfcfcf' dataKey="name" />
          <YAxis className='inter-body-sm' stroke='#cfcfcf' />
          <Brush height={10} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
