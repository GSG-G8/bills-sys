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
    <>
      <div className="mx-4 lg:mx-16 lg:my-8 md:mx-10 md:my-5">
        <LineChart bills={bills.map(({ amount }) => amount)} />
        <ToggleContainer title={t('Compare Table')}>
          <Table bills={billsOfPageType} />
        </ToggleContainer>
      </div>
    </>
  );
};

export default PastBills;
