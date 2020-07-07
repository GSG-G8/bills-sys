import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BillTypes, Loader, DoughnutChart } from '../components';
import { getMonthlyBills } from '../util';

const Home = () => {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [userMonthlyBills, setUserMonthlyBills] = useState([]);
  const [types, setTypes] = useState([]);
  const [amounts, setAmounts] = useState([]);
  const [sumBills, setSumBills] = useState(0);
  const [userName, setUserName] = useState('');

  const months = t('months', { returnObjects: true });

  const getUserName = async () => {
    try {
      const { data } = await axios.get('api/v1/profile');
      setUserName(data.first_name);
    } catch (err) {
      if (err.response) setError(err.response.data.message);
      else setError('Something went error');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/v1/bills/me');
        const { data: bills } = res;
        setUserMonthlyBills(getMonthlyBills(bills));
        setTypes(getMonthlyBills(bills).map(({ name }) => name));
        setAmounts(getMonthlyBills(bills).map(({ amount }) => amount));
        setSumBills(
          getMonthlyBills(bills)
            .map(({ amount }) => amount)
            .reduce((a, b) => a + b, 0)
        );
      } catch (err) {
        if (err.response) setError(err.response.data.message);
        else setError('Something went error');
      }
    })();
    getUserName();
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

  if (!userMonthlyBills?.length) return <Loader />;

  return (
    <div className="mx-auto lg:w-4/5 w-11/12 md:pt-10 pt-4">
      <h1 className="font-bold md:text-3xl text-2xl sm:mb-2">
        {' '}
        {t('greeting')} {userName}{' '}
      </h1>
      <p className="md:text-2xl">
        {t('hometitle')} {months[new Date().getMonth()]}:{' '}
        <span className="text-primary">{sumBills}$</span>.
      </p>
      <div className="md:flex md:justify-between md:align-middle md:mt-6 sm:mt-10 mt-4">
        <DoughnutChart types={types} amounts={amounts} />
        <BillTypes userBillTypes={userMonthlyBills} toPage="current" />
      </div>
    </div>
  );
};

export default Home;
