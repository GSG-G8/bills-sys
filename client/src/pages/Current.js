import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ToggleContainer, Tips, Table, BarChart } from '../components';
import { DataContext } from '../context';
import * as stats from '../util';

const Current = ({ userId }) => {
  const [billsOfPageType, setBillsOfPageType] = useState();
  const [groupCenters, setGroupCenters] = useState();
  const [groupFrequencies, setGroupFrequencies] = useState();
  const [chartColors, setChartColors] = useState();
  const [currentBill, setCurrentBill] = useState();
  const [trimmedMean, setTrimmedMean] = useState();
  const [withinHighestTen, setWithinHighestTen] = useState();
  const [chartError, setChartError] = useState();
  const { bills, error } = useContext(DataContext);
  const { billType, billId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    setBillsOfPageType(bills.filter(({ type: { name } }) => name === billType));

    (async () => {
      try {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
        const { data } = await axios.get(
          `/api/v1/bills/${userId}/stats?typeId=${billId}&&billingMonth=${currentMonth}&&billingYear=${currentYear}`
        );

        const currentBillAmount = bills.filter(
          (bill) =>
            bill.billing_month === currentMonth &&
            bill.billing_year === currentYear &&
            bill.type_id === Number(billId)
        )?.[0]?.amount;
        const sortedData = stats.sortValues(data);
        const { centers, frequencies } = stats.frequencyGroupsGenerator(
          sortedData
        );
        const mean = stats.trimmedMean(sortedData);
        const colorsSet = stats.generateColorsSet(frequencies);
        setGroupCenters(centers);
        setGroupFrequencies(frequencies);
        setChartColors(colorsSet);
        setCurrentBill(currentBillAmount);
        setTrimmedMean(mean);
        setWithinHighestTen(
          stats.checkHighestTen(sortedData, currentBillAmount)
        );
      } catch (err) {
        if (err.response) setChartError(err.response.data.message);
        else setChartError(t('error'));
      }
    })();
  }, [userId, billId, billType, t, bills]);

  return (
    <>
      {chartError ? (
        <p className="text-center">{chartError}</p>
      ) : (
        groupCenters &&
        groupFrequencies &&
        chartColors && (
          <div>
            <BarChart
              centers={groupCenters}
              frequencies={groupFrequencies}
              colors={chartColors}
            />
            <p className="text-center">
              {t('pages.current.myBill', {
                billType: t(billType),
                currentBill,
              })}
            </p>
            <p className="text-center">
              {t('pages.current.mean', { billType: t(billType), trimmedMean })}
            </p>
            {withinHighestTen && (
              <p className="text-center">{t('pages.current.highestTen')}</p>
            )}
          </div>
        )
      )}

      <div className="mx-4 lg:mx-16 lg:mx-8 lg:my-8 md:mx-10 md:mx-5 md:my-5">
        <ToggleContainer title={t('tips-toggle-title')}>
          <Tips billType={billType} />
        </ToggleContainer>
        {error ? (
          <p className="text-center">{error}</p>
        ) : (
          billsOfPageType && (
            <ToggleContainer title={t('compare-table-title')}>
              <Table bills={billsOfPageType} />
            </ToggleContainer>
          )
        )}
      </div>
    </>
  );
};

Current.propTypes = {
  userId: propTypes.number.isRequired,
};

export default Current;
