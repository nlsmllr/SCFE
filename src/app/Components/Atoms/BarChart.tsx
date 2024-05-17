import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { data } from '../../../../mock-data';

export const BarCrt = ({ title }: { title: string }) => {
  return (
    <div className='graphBox'>
       <h4 className='graphTitle'>{ title }</h4>
      <ResponsiveContainer width={'100%'} height={200}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>

  )
}