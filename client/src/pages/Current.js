import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ToggleContainer, Tips, Table, BarChart } from '../components';
import * as stats from '../util';

const Current = ({ userId }) => {
  const [currentBill, setCurrentBill] = useState();
  const [withinHighestTen, setWithinHighestTen] = useState();
  const [groupFrequencies, setGroupFrequencies] = useState();
  const [groupCenters, setGroupCenters] = useState();
  const [trimmedMean, setTrimmedMean] = useState();
  const [chartColors, setChartColors] = useState();
  const [bills, setBills] = useState();
  const [error, setError] = useState();
  const { billType, billId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
        const { data: allBills } = await axios.get('/api/v1/bills/me');
        const { data: dataset } = await axios.get(
          `/api/v1/bills/${userId}/stats?typeId=${billId}&&billingMonth=${currentMonth}&&billingYear=${currentYear}`
        );
        const billsOfPageType = allBills.filter(
          ({ type: { name } }) => name === billType
        );
        const currentBillAmount = allBills.filter(
          (bill) =>
            bill.billing_month === currentMonth &&
            bill.billing_year === currentYear &&
            bill.type_id === Number(billId)
        )?.[0]?.amount;
        const sortedData = stats.sortValues(dataset);
        const { centers, frequencies } = stats.frequencyGroupsGenerator(
          sortedData
        );
        const mean = stats.trimmedMean(sortedData);
        const colorsSet = stats.generateColorsSet(frequencies);
        setBills(billsOfPageType);
        setGroupCenters(centers);
        setGroupFrequencies(frequencies);
        setTrimmedMean(mean);
        setWithinHighestTen(
          stats.checkHighestTen(sortedData, currentBillAmount)
        );
        setChartColors(colorsSet);
        setCurrentBill(currentBillAmount);
      } catch (err) {
        if (err.response) setError(err.response.data.message);
        else setError(t('error'));
      }
    })();
  }, [userId, billId, billType, t]);

  if (error) return <p className="text-center">{error}</p>;

  return (
    <>
      {groupCenters && groupFrequencies && chartColors && (
        <div>
          <BarChart
            centers={groupCenters}
            frequencies={groupFrequencies}
            colors={chartColors}
          />
          <p className="text-center">
            {t('pages.current.myBill', { billType: t(billType), currentBill })}
          </p>
          <p className="text-center">
            {t('pages.current.mean', { billType: t(billType), trimmedMean })}
          </p>
        </div>
      )}
      {withinHighestTen && (
        <p className="text-center">{t('pages.current.highestTen')}</p>
      )}
      <div className="mx-4 lg:mx-16 lg:mx-8 lg:my-8 md:mx-10 md:mx-5 md:my-5">
        <ToggleContainer title={t('tips-toggle-title')}>
          <Tips billType={billType} />
        </ToggleContainer>
        {bills && (
          <ToggleContainer title={t('compare-table-title')}>
            <Table bills={bills} />
          </ToggleContainer>
        )}
      </div>
    </>
  );
};

Current.propTypes = {
  userId: propTypes.number.isRequired,
};

export default Current;
