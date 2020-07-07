import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { BillTypes, Loader, DoughnutChart } from '../components';
import { getMonthlyBills } from '../util';
import { DataContext } from '../context';

const Home = () => {
  const { t } = useTranslation();
  const { bills, error, profile } = useContext(DataContext);
  const [userMonthlyBills, setUserMonthlyBills] = useState([]);
  const [types, setTypes] = useState([]);
  const [amounts, setAmounts] = useState([]);
  const [sumBills, setSumBills] = useState(0);

  const months = t('months', { returnObjects: true });

  useEffect(() => {
    if (bills?.length) {
      setUserMonthlyBills(getMonthlyBills(bills));
      setTypes(getMonthlyBills(bills).map(({ name }) => name));
      setAmounts(getMonthlyBills(bills).map(({ amount }) => amount));
      setSumBills(
        getMonthlyBills(bills)
          .map(({ amount }) => amount)
          .reduce((a, b) => a + b, 0)
      );
    }
  }, [bills]);

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
        {t('greeting')} {profile.first_name}{' '}
      </h1>
      <p className="md:text-2xl">
        {t('hometitle')} {months[new Date().getMonth()]}:{' '}
        <span className="text-primary">${sumBills}</span>.
      </p>
      <div className="md:flex md:justify-between md:align-middle md:mt-6 sm:mt-10 mt-4">
        <DoughnutChart types={types} amounts={amounts} />
        <BillTypes userBillTypes={userMonthlyBills} toPage="current" />
      </div>
    </div>
  );
};

export default Home;
