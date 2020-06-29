import React from 'react';
import ToggleContainer from '../components/ToggleContainer';
import Tips from '../components/Tips';
import Table from '../components/Table';

const Current = () => (
  <>
    <ToggleContainer title="Tips">
      <Tips />
    </ToggleContainer>
    <ToggleContainer title="Compare Table">
      <Table />
    </ToggleContainer>
  </>
);

export default Current;
