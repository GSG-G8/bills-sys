import React from 'react';
import ToggleContainer from '../components/ToggleContainer';
import Tips from '../components/Tips';
import Table from '../components/Table';
import BarChart from '../components/Charts/BarChart';

// this will be here for the mean time just to display the chart till the current page gets ready
//
// fake data for the BarChart
const data = [121, 90, 2, 4, 6, 7, 11, 21, 81, 105];

const Current = () => (
  <>
    <BarChart data={data} />
    <ToggleContainer title="Tips">
      <Tips />
    </ToggleContainer>
    <ToggleContainer title="Compare Table">
      <Table />
    </ToggleContainer>
  </>
);

export default Current;
