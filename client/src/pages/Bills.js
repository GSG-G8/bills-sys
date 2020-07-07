import React, { useContext } from 'react';
import { Loader } from '../components';
import BillTypes from '../components/BillTypes';
import { DataContext } from '../context';

const Bills = () => {
  const { types } = useContext(DataContext);
  if (!types?.length) return <Loader />;
  return (
    <div className="flex flex-col items-center mt-16">
      <BillTypes userBillTypes={types} toPage="past-bills" />
    </div>
  );
};
export default Bills;
