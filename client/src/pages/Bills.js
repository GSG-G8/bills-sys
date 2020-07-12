import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from '../components';
import BillTypes from '../components/BillTypes';
import { DataContext } from '../context';

const Bills = () => {
  const { t } = useTranslation();
  const { types } = useContext(DataContext);
  if (!types?.length) return <Loader />;
  return (
    <>
      <h1 className="font-bold md:text-3xl text-2xl sm:mb-2">
        {t('past-bills')}
      </h1>
      <div className="flex flex-wrap justify-between text-2xl text-mich-white mt-10">
        <BillTypes userBillTypes={types} toPage="past-bills" />
      </div>
    </>
  );
};
export default Bills;
