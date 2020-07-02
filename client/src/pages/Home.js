import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BillTypes, Loader, PieChart } from '../components';
import getBillTypes from '../utils/getBillTypes';

const Home = () => {
  const [error, setError] = useState('');
  const [userBillTypes, setUserBillTypes] = useState([]);

  const getMonthBills = async () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    console.log('mmmm', months[new Date().getMonth()]);
  };

  useEffect(() => {
    getMonthBills();
    (async () => {
      try {
        const res = await axios.get('/api/v1/bills/me');
        const { data: bills } = res;
        setUserBillTypes(getBillTypes(bills));
      } catch (err) {
        if (err.response) setError(err.response.data.message);
        else setError('Something went error');
      }
    })();
  }, []);
  if (error)
    return (
      <div
        className="bg-magenta lg:w-1/2 md:w-2/3 border-l-8 border-kournikova text-mich-white p-4"
        role="alert"
      >
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );

  if (!userBillTypes?.length) return <Loader />;
  return (
    <>
      <h1> Home </h1>
      <PieChart userBillTypes={userBillTypes} />
      <BillTypes userBillTypes={userBillTypes} />
    </>
  );
};

export default Home;
