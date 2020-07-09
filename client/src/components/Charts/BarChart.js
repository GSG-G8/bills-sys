import React from 'react';
import propTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const BarChart = ({ centers, frequencies, colors }) => {
  const { t } = useTranslation();
  const data = {
    labels: centers,
    datasets: [
      {
        label: t('pages.current.frequency'),
        data: frequencies,
        backgroundColor: colors,
        barThickness: 'flex',
        barPercentage: 1,
      },
    ],
  };
  const options = {
    title: {
      display: true,
      fontSize: 16,
      fontColor: 'black',
      text: t('pages.current.chartTitle'),
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        color: 'black',
        fontSize: 20,
      },
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: t('pages.current.xAxisLabel'),
            fontSize: 16,
            fontColor: 'black',
          },
        },
      ],

      yAxes: [
        {
          display: false,
          ticks: {
            min: 0,
            max: Math.max(...frequencies),
            stepSize: 5,
          },
        },
      ],
    },
  };

  return (
    <div className="p-4 h-half-screen lg:w-2/3">
      <Bar data={data} options={options} />
    </div>
  );
};

BarChart.propTypes = {
  centers: propTypes.arrayOf(propTypes.number).isRequired,
  frequencies: propTypes.arrayOf(propTypes.number).isRequired,
  colors: propTypes.arrayOf(propTypes.string).isRequired,
};

export default BarChart;
