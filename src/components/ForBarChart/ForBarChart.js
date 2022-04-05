import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const ForBarChart = () => {
  const [chart, setChart] = useChart();
  return (
    <BarChart
      width={650}
      height={400}
      data={chart}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='month' />
      <YAxis yAxisId='left' orientation='left' stroke='#8884d8' />
      <YAxis yAxisId='right' orientation='right' stroke='#82ca9d' />
      <Tooltip />
      <Legend />
      <Bar yAxisId='left' dataKey='sell' fill='#8884d8' />
      <Bar yAxisId='right' dataKey='revenue' fill='#82ca9d' />
    </BarChart>
  );
};

export default ForBarChart;