import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { pieData01, pieData02 } from '../../../Constants/mock-data';
import { normalize } from 'node:path/win32';
export const PieChrt = ({ title, subtitle, category }: { title: string, subtitle: string, category: string[] }) => {
  return (
    <div className="graphBox">
      <div className='flex flex-row items-baseline pb-6'>
        <h4 className='graphTitle'>{title}</h4>
        <p className='graphSubtitle'>{subtitle}</p>
      </div>
      <ResponsiveContainer width={'100%'} height={200}>

        <PieChart width={250} height={250}>
          <Pie  data={pieData01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#cfcfcf" animationBegin={1900} />
          <Pie  data={pieData02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fillOpacity={0.6} fill="#ffc658" background-opacity={75}  label animationBegin={1500}/>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};