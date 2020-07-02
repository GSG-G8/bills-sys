import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const DoughnutChart = ({ userMonthlyBills }) => {
  const { t } = useTranslation();
  const result = userMonthlyBills.map((bill) => bill.name);
  const types = result.map((type) => t(type));
  const amount = userMonthlyBills.map((bill) => bill.amount);
  const data = {
    labels: types,
    datasets: [
      {
        data: amount,
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

const { shape, arrayOf, number, string } = PropTypes;

DoughnutChart.propTypes = {
  userMonthlyBills: arrayOf(
    shape({
      amount: number.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
};

export default DoughnutChart;
