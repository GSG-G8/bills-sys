import React, { useEffect, useState, useContext } from 'react';
import BillTypes from '../components/BillTypes';
import getBillsTypes from '../util/getBillsTypes';
import { DataContext } from '../context';

const Bills = () => {
  const [data] = useContext(DataContext);
  const [userBillTypes, setUserBillTypes] = useState([]);

  useEffect(() => {
    setUserBillTypes(getBillsTypes(data));
  }, [data]);

  return (
    <div className="flex flex-col items-center mt-16">
      <BillTypes userBillTypes={userBillTypes} toPage="past-bills" />
    </div>
  );
};
export default Bills;
