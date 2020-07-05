import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ToggleContainer, Table, Loader, LineChart } from '../components';

const PastBills = () => {
  const { t } = useTranslation();
  const { billType } = useParams();
  const [bills, setBills] = useState();
  const getBills = async () => {
    const { data } = await axios.get('/api/v1/bills/me');
    setBills(data);
  };

  useEffect(() => {
    getBills();
  }, []);

  if (!bills?.[0]) return <Loader />;
  const billsOfPageType = bills.filter(
    ({ type: { name } }) => name === billType
  );
  return (
    <>
      <div className="mx-4 lg:mx-16 lg:mx-8 lg:my-8 md:mx-10 md:mx-5 md:my-5">
        <LineChart bills={bills.map(({ amount }) => amount)} />
        <ToggleContainer title={t('Compare Table')}>
          <Table bills={billsOfPageType} />
        </ToggleContainer>
      </div>
    </>
  );
};

export default PastBills;
