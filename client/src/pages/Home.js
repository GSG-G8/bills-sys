import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BillTypes, Loader, DoughnutChart } from '../components';
import { getBillTypes, getMonthlyBills } from '../utils';

const Home = () => {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [userBillTypes, setUserBillTypes] = useState([]);
  const [userMonthlyBills, setUserMonthlyBills] = useState([]);

  const months = t('months', { returnObjects: true });

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

  const types = userMonthlyBills.map(({ name }) => name);
  const amounts = userMonthlyBills.map(({ amount }) => amount);
  const userBills = userMonthlyBills
    .map(({ amount }) => amount)
    .reduce((a, b) => a + b, 0);

  return (
    <div className=" px-6 lg:px-24">
      <h1 className="font-bold text-3xl"> {t('greeting')} </h1>
      <p>
        {t('hometitle')} {months[new Date().getMonth()]}: ${userBills}.
      </p>
      <DoughnutChart types={types} amounts={amounts} />
      <BillTypes userBillTypes={userBillTypes} toPage="current" />
    </div>
  );
};

export default Home;
