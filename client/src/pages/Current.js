import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  ToggleContainer,
  Tips,
  Table,
  BarChart,
  ChartDescription,
} from '../components';
import { DataContext } from '../context';
import * as stats from '../util';

const Current = ({ userId }) => {
  const [groupCenters, setGroupCenters] = useState();
  const [groupFrequencies, setGroupFrequencies] = useState();
  const [chartColors, setChartColors] = useState();
  const [currentBill, setCurrentBill] = useState();
  const [trimmedMean, setTrimmedMean] = useState();
  const [withinHighestTen, setWithinHighestTen] = useState();
  const [chartError, setChartError] = useState();
  const [otherUsersBills, setOtherUsersBills] = useState();

  const { bills, error, types } = useContext(DataContext);
  const { billType } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (types.length)
      (async () => {
        try {
          const currentDate = new Date();
          const currentMonth = currentDate.getMonth() + 1;
          const currentYear = currentDate.getFullYear();
          const { id: billTypeId, name } = types.find(
            ({ name: typeName }) => typeName === billType
          );
          const { data } = await axios.get(
            `/api/v1/bills/${userId}/stats?typeId=${billTypeId}&&billingMonth=${currentMonth}&&billingYear=${currentYear}`
          );
          setOtherUsersBills(
            data.map((amount, i) => ({
              id: i,
              amount,
              billing_month: currentMonth,
              billing_year: currentYear,
              type: { name },
            }))
          );
          const currentBillAmount = bills.filter(
            ({
              billing_month: billingMonth,
              billing_year: billingYear,
              type_id: typeId,
            }) =>
              billingMonth === currentMonth &&
              billingYear === currentYear &&
              typeId === billTypeId
          )[0].amount;
          const sortedData = stats.sortValues(data);
          const groups = stats.frequencyGroupsGenerator(sortedData);
          const frequencies = groups.map(({ frequency }) => frequency);
          const centers = groups.map(({ center }) => center);
          const mean = stats.trimmedMean(sortedData);
          const colorsSet = stats.generateColorsSet(frequencies);
          const userGroup = groups.filter(
            ({ interval }) =>
              currentBillAmount >= interval[0] &&
              currentBillAmount <= interval[1]
          )[0].frequency;
          colorsSet[frequencies.indexOf(userGroup)] = '#187bcd';
          setGroupCenters(centers.map((x) => `${x}$`));
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
  }, [userId, billType, t, bills, types]);

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
            <div>
              <div className="px-4 md:px-20 flex justify-between">
                <div className="self-center">
                  <ChartDescription />
                </div>
                <div>
                  <p className="p-1 my-1 bg-primary">
                    {t('pages.current.greenBar')}
                  </p>
                  <p className="p-1 my-1 bg-blue">
                    {t('pages.current.blueBar')}
                  </p>
                  <p className="p-1 my-1 bg-red-600">
                    {t('pages.current.redBar')}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-center">
                  {t('pages.current.myBill', {
                    billType: t(billType),
                    currentBill,
                  })}
                </p>
                <p className="text-center">
                  {t('pages.current.mean', {
                    billType: t(billType),
                    trimmedMean,
                  })}
                </p>
                {withinHighestTen && (
                  <p className="text-center">{t('pages.current.highestTen')}</p>
                )}
              </div>
            </div>
          </div>
        )
      )}

      <div className="mx-4 lg:mx-16 lg:my-8 md:mx-10 md:my-5">
        <ToggleContainer title={t('tips-toggle-title')}>
          <Tips billType={billType} />
        </ToggleContainer>
        {error ? (
          <p className="text-center">{error}</p>
        ) : (
          otherUsersBills && (
            <ToggleContainer title={t('compare-table-title')}>
              <Table bills={otherUsersBills} />
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
