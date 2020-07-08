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
        label: `${t('past-bills')} $`,
        fill: false,
        lineTension: 0,
        backgroundColor: '#00A779',
        borderColor: '#00A779',
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#00A779',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 2,
        pointHoverBackgroundColor: '#B76569',
        pointHoverBorderColor: '#B76569',
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
            max: Math.max(...bills) + 40,
            stepSize: 40,
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
      <Line data={data} options={options} height={300} />
    </div>
  );
};
LineChart.propTypes = {
  bills: propTypes.arrayOf(propTypes.number).isRequired,
};

export default LineChart;
