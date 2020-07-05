import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BillTypes from '../components/BillTypes';

const Bills = () => {
  const [types, setTypes] = useState([]);

  //   const getTypes = async () => {
  //     const { types } = await axios.get('api/v1/types');
  //   };
  useEffect(() => {
    const res = axios.get('/api/v1/types');
    const { data: bills } = res;
    setTypes(bills).map(({ name }) => name);
    // getTypes();
  }, []);
  return (
    <div className="mx-auto lg:w-4/5 w-11/12 md:pt-10 pt-4 pb-24 md:pb-0">
      <BillTypes userBillTypes={types} toPage="past-bills" />
    </div>
  );
};
export default Bills;
