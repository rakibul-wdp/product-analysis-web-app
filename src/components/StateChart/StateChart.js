import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const StateChart = () => {
  const [chart, setChart] = useChart();
  return (
    <LineChart
      width={650}
      height={400}
      data={chart}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='sell' stroke='#8884d8' activeDot={{ r: 8 }} />
      <Line type='monotone' dataKey='revenue' stroke='#82ca9d' />
    </LineChart>
  );
};

export default StateChart;
