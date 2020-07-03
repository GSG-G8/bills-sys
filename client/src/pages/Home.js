import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BillTypes, Loader, DoughnutChart } from '../components';
import getMonthlyBills from '../utils/getMonthlyBills';

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
    <div className=" px-6 lg:px-24">
      <h1 className="font-bold text-3xl">
        {' '}
        {t('greeting')} {userName}{' '}
      </h1>
      <p>
        {t('hometitle')} {months[new Date().getMonth()]}: ${sumBills}.
      </p>
      <DoughnutChart types={types} amounts={amounts} />
      <BillTypes userBillTypes={userMonthlyBills} toPage="current" />
    </div>
  );
};

export default Home;
