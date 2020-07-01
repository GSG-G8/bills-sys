import React from 'react';
import propTypes from 'prop-types';
import ToggleContainer from '../components/ToggleContainer';
import Tips from '../components/Tips';
import Table from '../components/Table';

const Current = ({ billType }) => (
  <>
    <ToggleContainer title="Tips">
      <Tips billType={billType} />
    </ToggleContainer>
    <ToggleContainer title="Compare Table">
      <Table />
    </ToggleContainer>
  </>
);

Current.propTypes = {
  billType: propTypes.oneOf(['water', 'electricity', 'mobile', 'internet'])
    .isRequired,
};
export default Current;
