import React from 'react';
import ToggleContainer from '../components/ToggleContainer';
import Tips from '../components/Tips';
import Table from '../components/Table';
import BarChart from '../components/Charts/BarChart';
import * as stats from '../util';

const data = [121, 90, 2, 4, 6, 7, 11, 21, 81, 105];
const sortedData = stats.sortValues(data);
const trimmedMean = stats.trimmedMean(sortedData);
const { centers, frequencies } = stats.frequencyGroupsGenerator(sortedData);
const Current = () => (
  <>
    <BarChart centers={centers} frequencies={frequencies} />
    <p>Trimmed Mean is {trimmedMean}</p>
    <ToggleContainer title="Tips">
      <Tips />
    </ToggleContainer>
    <ToggleContainer title="Compare Table">
      <Table />
    </ToggleContainer>
  </>
);

export default Current;
