import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BillTypes from '../components/BillTypes';
import getBillsTypes from '../utils/getBillsTypes';

const Bills = () => {
  const [userBillTypes, setUserBillTypes] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/v1/types');
      const { data } = res;
      setUserBillTypes(getBillsTypes(data));
    })();
  }, []);

  return <BillTypes userBillTypes={userBillTypes} toPage="past-bills" />;
};
export default Bills;
