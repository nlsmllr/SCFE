import { RadarChart, Radar, PolarGrid, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { radarData } from '../../../../mock-data';

export const RadChart = ({ title }: { title: string }) => {
  return (
    <div className="graphBox">
       <h4 className='graphTitle'>{ title }</h4>
      <ResponsiveContainer width={'100%'} height={200}>
        <RadarChart outerRadius={50} width={730} height={250} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}