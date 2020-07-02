import React from 'react';
import propTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const DoughnutChart = ({ types, amounts }) => {
  const { t } = useTranslation();
  const data = {
    labels: types.map((e) => t(e)),
    datasets: [
      {
        data: amounts,
        backgroundColor: ['#FFD44C', '#999BD2', '#B76569', '#1F7BCA'],
        hoverBackgroundColor: ['#ffdd70', '#adafdb', '#c58487', '#4c95d5'],
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} />
    </>
  );
};

DoughnutChart.propTypes = {
  types: propTypes.arrayOf(propTypes.string).isRequired,
  amounts: propTypes.arrayOf(propTypes.number).isRequired,
};

export default DoughnutChart;
