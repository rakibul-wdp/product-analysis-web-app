import React from 'react';
import ForAreaChart from '../ForAreaChart/ForAreaChart';
import ForBarChart from '../ForBarChart/ForBarChart';
import ForPieChart from '../ForPieChart/ForPieChart';
import StateChart from '../StateChart/StateChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <h2 className='dashboard-heading'>Dashboard with Chart</h2>
      <div className='dashboard-chart'>
        <div>
          <StateChart />
          <h3 className='dashboard-chart-heading'>Sell Vs Revenue</h3>
        </div>
        <div>
          <ForAreaChart />
          <h3 className='dashboard-chart-heading'>Investment Vs Revenue</h3>
        </div>
        <div>
          <ForBarChart />
          <h3 className='dashboard-chart-heading'>Month Wise Sell</h3>
        </div>
        <div>
          <ForPieChart />
          <h3 className='dashboard-chart-heading'>Sell and Revenue wise Pie-Chart</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
