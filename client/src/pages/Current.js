import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ToggleContainer, Tips, Table, Loader, BarChart } from '../components';
import * as stats from '../util';

const dataset = [121, 90, 2, 4, 6, 7, 11, 21, 81, 105];
const sortedData = stats.sortValues(dataset);
// const trimmedMean = stats.trimmedMean(sortedData);
const { centers, frequencies } = stats.frequencyGroupsGenerator(sortedData);

const Current = () => {
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
      <BarChart centers={centers} frequencies={frequencies} />
      <div className="mx-4 lg:mx-16 lg:mx-8 lg:my-8 md:mx-10 md:mx-5 md:my-5">
        <ToggleContainer title={t('tipsToggleTitle')}>
          <Tips billType={billType} />
        </ToggleContainer>
        <ToggleContainer title={t('compareTableTitle')}>
          <Table bills={billsOfPageType} />
        </ToggleContainer>
      </div>
    </>
  );
};

export default Current;
