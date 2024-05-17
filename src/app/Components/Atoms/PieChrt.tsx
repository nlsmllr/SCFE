import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { pieData01, pieData02 } from '../../../../mock-data';
export const PieChrt = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <div className="graphBox">
      <div className='flex flex-row items-baseline pb-6'>
        <h4 className='graphTitle'>{title}</h4>
        <p className='graphSubtitle'>{subtitle}</p>
      </div>
      <ResponsiveContainer width={'100%'} height={200}>

        <PieChart width={250} height={250}>
          <Pie data={pieData01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={pieData02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};