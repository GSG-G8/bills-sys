import React from 'react';
import propTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

// this will trim the outliers values from both the start and the end of the data array
const trimmer = (bound, data) => {
  const values = [...data];
  for (let i = 0; i < Math.floor(bound); i += 1) {
    values.pop();
    values.shift();
  }
  return values;
};

/* 
this will find the outliers values in the dataset and decide the count to trim from both sides 
and find the trimmed mean
*/
const trimmedMean = (data) => {
  const values = [...data];
  const valuesCount = values.length;
  // this is the trimming proportion, it mean that we want to trim 10% of the dataset
  const proportionTrimmed = 0.1;
  // decides how many values should we trim
  const trimCount = valuesCount * proportionTrimmed;
  // decides how many values will remain after trimming
  const remainingValuesCount = valuesCount - 2 * trimCount;
  const trimmedValues = trimmer(trimCount, values);
  // if the number to trim is not an integer this will handle the issue
  if (!Number.isInteger(trimCount)) {
    trimmedValues[0] *= Math.abs(1 - trimCount);
    trimmedValues[trimmedValues.length - 1] *= Math.abs(1 - trimCount);
  }
  const valuesSum = trimmedValues.reduce((a, b) => a + b);
  return valuesSum / remainingValuesCount;
};

const BarChart = ({ data }) => (
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
    <p>the mean is {trimmedMean(data)}</p>
  </div>
);

BarChart.propTypes = {
  data: propTypes.arrayOf(propTypes.number).isRequired,
};

export default BarChart;
