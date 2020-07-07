import React from 'react';
import propTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { useTranslation } from 'react-i18next';

const DoughnutChart = ({ types, amounts }) => {
  const { t } = useTranslation();
  const data = {
    labels: types.map((e) => t(e)),
    datasets: [
      {
        data: amounts,
        backgroundColor: ['#FFD44C', '#999BD2', '#B76569', '#1F7BCA'],
        hoverBackgroundColor: ['#ffc91a', '#8385c9', '#ad5256', '#1c6bb0'],
      },
    ],
  };

  return (
    <div dir="ltr" className="md:w-12/25 md:pt-6 mb-6">
      <Doughnut
        data={data}
        width={80}
        height={55}
        options={{
          legend: {
            display: true,
            position: 'left',
            labels: {
              fontColor: '#242424',
              fontFamily: 'Lato, sans-serif',
            },
          },
          plugins: {
            datalabels: {
              display: true,
              color: 'white',
              font: {
                weight: 'bold',
                family: 'Lato, sans-serif',
                size: '14',
              },
              padding: 40,
              formatter(value) {
                return `${value}$`;
              },
            },
          },
        }}
      />
    </div>
  );
};

DoughnutChart.propTypes = {
  types: propTypes.arrayOf(propTypes.string).isRequired,
  amounts: propTypes.arrayOf(propTypes.number).isRequired,
};

export default DoughnutChart;
