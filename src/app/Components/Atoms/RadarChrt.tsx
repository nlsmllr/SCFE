import { RadarChart, Radar, PolarGrid, XAxis, YAxis, Text, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, PolarAngleAxis, PolarRadiusAxis, Label } from 'recharts';
import { radarData } from '../../../../mock-data';

export const RadarChrt = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <div className="graphBox">
      <div className='flex flex-row items-baseline pb-6'>
        <h4 className='graphTitle'>{title}</h4>
        <p className='graphSubtitle'>{subtitle}</p>
      </div>
      <ResponsiveContainer width={'100%'} height={200}>
        <RadarChart outerRadius={50} width={250} height={250} data={radarData} >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar name="MF" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} animationBegin={1500}/>
          <Radar name="AF" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} animationBegin={1500}/>
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}