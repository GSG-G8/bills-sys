import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ userMonthlyBills }) => {
  const type = userMonthlyBills.map((bill) => bill.name);
  const amount = userMonthlyBills.map((bill) => bill.amount);
  const data = {
    labels: type,
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
