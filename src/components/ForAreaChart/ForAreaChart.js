import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const ForAreaChart = () => {
  const [chart, setChart] = useChart();
  return (
    <AreaChart
      width={650}
      height={380}
      data={chart}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Area type='monotone' dataKey='sell' stackId='1' stroke='#8884d8' fill='#8884d8' />
      <Area type='monotone' dataKey='revenue' stackId='1' stroke='#82ca9d' fill='#82ca9d' />
      <Area type='monotone' dataKey='investment' stackId='1' stroke='#ffc658' fill='#ffc658' />
    </AreaChart>
  );
};

export default ForAreaChart;
