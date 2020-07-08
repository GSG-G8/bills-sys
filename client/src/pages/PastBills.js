import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ToggleContainer, Table, Loader, LineChart } from '../components';
import { DataContext } from '../context';

const PastBills = () => {
  const { t } = useTranslation();
  const { bills } = useContext(DataContext);
  const { billType } = useParams();

  if (!bills?.[0]) return <Loader />;
  const billsOfPageType = bills.filter(
    ({ type: { name } }) => name === billType
  );
  return (
    <div className="">
      <h1 className="font-bold md:text-3xl text-2xl sm:mb-2">
        {t('past-bills')}
      </h1>
      <LineChart bills={bills.map(({ amount }) => amount)} />
      <div className="mx-4 lg:mx-16 lg:my-8 md:mx-10 md:my-5">
      <ToggleContainer title={t('Compare Table')}>
        <Table bills={billsOfPageType} />
      </ToggleContainer>
      </div>
      
    </div>
  );
};

export default PastBills;
