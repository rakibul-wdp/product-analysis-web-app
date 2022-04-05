import React from 'react';
import ForAreaChart from '../ForAreaChart/ForAreaChart';
import ForBarChart from '../ForBarChart/ForBarChart';
import ForPieChart from '../ForPieChart/ForPieChart';
import StateChart from '../StateChart/StateChart';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard with Chart</h2>
      <div>
        <StateChart />
      </div>
      <div>
        <ForAreaChart/>
      </div>
      <div>
        <ForBarChart/>
      </div>
      <div>
        <ForPieChart/>
      </div>
    </div>
  );
};

export default Dashboard;