import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['', 'January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Past Bills $',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 2,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 25, 75, 90, 60, 40, 120, 70],
      },
    ],
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} />
    </div>
  );
};
LineChart.propTypes = {};

export default LineChart;
