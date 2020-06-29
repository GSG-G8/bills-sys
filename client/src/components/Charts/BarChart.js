import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => (
  <div>
    <Bar
      data={{
        labels: [25, 50, 75, 100],
        datasets: [
          {
            label: 'Frequency',
            data: [86, 67, 91, 70],
            backgroundColor: ['red', 'green', 'blue', 'black'],
            borderColor: 'blue',
            borderWidth: 5,
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: 'Custom Chart Title',
        },
      }}
    />
    <p />
  </div>
);

export default BarChart;
