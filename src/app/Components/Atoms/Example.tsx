import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from '../../../../mock-data';

export const Example =  ({ title }: { title: string }) => {
  return (
    <div className="graphBox">
        <h4 className='graphTitle'>{ title }</h4>
      <ResponsiveContainer width={'100%'} height={200}>
        <LineChart width={600} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#876543" />
          <CartesianGrid stroke="" strokeDasharray="5 5" />
          <XAxis className='inter-body-sm' stroke='#cfcfcf' dataKey="name" />
          <YAxis className='inter-body-sm' stroke='#cfcfcf' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
