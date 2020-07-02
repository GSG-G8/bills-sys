import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToggleContainer from '../components/ToggleContainer';
import Tips from '../components/Tips';
import Table from '../components/Table';

const Current = () => {
  const [bills, setBills] = useState();

  const getBills = async () => {
    const { data } = await axios.get('api/v1/bills/me');
    setBills(data);
  };
  useEffect(() => {
    getBills();
  }, []);

  return (
    <>
      <ToggleContainer title="Tips">
        <Tips />
      </ToggleContainer>
      <ToggleContainer title="Compare Table">
        <Table bills={bills} />
      </ToggleContainer>
    </>
  );
};

export default Current;
