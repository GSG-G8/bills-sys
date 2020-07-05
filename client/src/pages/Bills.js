import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BillTypes from '../components/BillTypes';
import getBillsTypes from '../util/getBillsTypes';

const Bills = () => {
  const [userBillTypes, setUserBillTypes] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/v1/types');
      const { data } = res;
      setUserBillTypes(getBillsTypes(data));
    })();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <BillTypes userBillTypes={userBillTypes} toPage="past-bills" />
    </div>
  );
};
export default Bills;
