import React from 'react';
import propTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const LineChart = ({ bills }) => {
  const { t } = useTranslation();
  const months = t('months', { returnObjects: true });
  const data = {
    labels: months,
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
        data: bills,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: Math.max(...bills) + 20,
            stepSize: 20,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        font: {
          size: 0,
        },
      },
    },
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};
LineChart.propTypes = {
  bills: propTypes.arrayOf(propTypes.number).isRequired,
};

export default LineChart;
