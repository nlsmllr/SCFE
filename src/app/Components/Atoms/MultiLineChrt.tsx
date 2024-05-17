import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { data } from '../../../../mock-data';

export const MultiLineChrt = ({ title, subtitle }: { title: string, subtitle:string}) => {
  return (
    <div className="graphBox">
      <div className='flex flex-row items-baseline pb-6'>
        <h4 className='graphTitle'>{ title }</h4>
        <p className='graphSubtitle'>{ subtitle }</p>
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
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#cfcfcf"
            fill="#cfcfcf"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#6e6e6e"
            fill="#6e6e6e"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};