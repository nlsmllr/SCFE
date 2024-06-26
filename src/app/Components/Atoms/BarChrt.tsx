import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Label } from 'recharts';
import { useEffect, useState } from 'react';
import data from './../../../Constants/data/tempforecast.json'; // Import the JSON file
 
export const BarChrt = ({ title, subtitle, data }: { title: string, subtitle: string, data: any[] }) => {
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
        <BarChart width={730} height={250} data={data} >
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="02:00" fill="#cfcfcf" animationBegin={1500}/>
          <Bar dataKey="05:00" fill="#ffc658" fillOpacity={0.6} animationBegin={1700}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
 
  )
}