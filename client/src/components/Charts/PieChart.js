import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const PieChart = ({ userBillTypes }) => {
  const data = {
    labels: userBillTypes,
    datasets: [
      {
        data: [300, 50, 100, 150],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#B76569'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <>
      <h1>PieChart</h1>
      <Doughnut data={data} />
    </>
  );
};

const { shape, arrayOf, number, string } = PropTypes;

PieChart.propTypes = {
  userBillTypes: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
};

export default PieChart;
