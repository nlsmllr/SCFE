import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Label } from 'recharts';
import { data } from '../../../Constants/mock-data';

export const BarChrt = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <div className="graphBox">
      <div className='flex flex-row items-baseline pb-6'>
        <h4 className='graphTitle'>{title}</h4>
        <p className='graphSubtitle'>{subtitle}</p>
      </div>
      <ResponsiveContainer width={'100%'} height={200}>
        <BarChart width={730} height={250} data={data} >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#cfcfcf" animationBegin={1500}/>
          <Bar dataKey="uv" fill="#ffc658" fillOpacity={0.6} animationBegin={1700}/>
        </BarChart>
      </ResponsiveContainer>
    </div>

  )
}