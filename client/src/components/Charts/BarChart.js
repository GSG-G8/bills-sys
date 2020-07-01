import React from 'react';
import propTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ centers, frequencies }) => (
  <div className="p-4 m-auto md:w-2/3 lg:w-1/2">
    <Bar
      data={{
        labels: centers,
        datasets: [
          {
            label: 'Frequency',
            data: frequencies,
            backgroundColor: 'green',
            barThickness: 'flex',
            barPercentage: 1,
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: 'Custom Chart Title',
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        plugins: {
          datalabels: {
            font: {
              size: 0,
            },
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                offsetGridLines: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: Math.max(...frequencies) + 10,
                stepSize: 10,
              },
            },
          ],
        },
      }}
    />
  </div>
);

BarChart.propTypes = {
  centers: propTypes.arrayOf(propTypes.number).isRequired,
  frequencies: propTypes.arrayOf(propTypes.number).isRequired,
};

export default BarChart;
