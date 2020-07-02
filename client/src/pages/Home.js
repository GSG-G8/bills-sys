import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BillTypes, Loader, DoughnutChart } from '../components';
import { getBillTypes, getMonthlyBills } from '../utils';

const Home = () => {
  const [error, setError] = useState('');
  const [userBillTypes, setUserBillTypes] = useState([]);
  const [userMonthlyBills, setUserMonthlyBills] = useState([]);

  const getMonthBills = () => {
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

    return months[new Date().getMonth()];
  };

  // const billsAmount = () => {
  //   console.log('ssss', getMonthlyBills())
  // }

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/v1/bills/me');
        const { data: bills } = res;
        setUserMonthlyBills(getMonthlyBills(bills));
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

  const types = userMonthlyBills.map((bill) => bill.name);
  const amounts = userMonthlyBills.map((bill) => bill.amount);
  const userBills = userMonthlyBills
    .map((bill) => bill.amount)
    .reduce((a, b) => a + b);

  return (
    <div className=" px-6 lg:px-24">
      <h1 className="font-bold text-3xl"> Hello </h1>
      <p>
        Your total for the month of {getMonthBills()} was: ${userBills}.
      </p>
      <DoughnutChart types={types} amounts={amounts} />
      <BillTypes userBillTypes={userBillTypes} toPage="current" />
    </div>
  );
};

export default Home;
