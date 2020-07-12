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
          <div className="lg:flex lg:justify-between">
            <BarChart
              centers={groupCenters}
              frequencies={groupFrequencies}
              colors={chartColors}
            />
            <div className="lg:flex-col flex-col justify-around flex sm:flex-row">
              <div className="border-4 border-primary-lighter p-2 sm:mb-0 mb-6 lg:mb-0 sm:w-10/12 sm:mr-10 lg:mr-0 md:w-12/25 lg:w-auto">
                <div className="flex justify-between bg-gray-200 p-2">
                  <div className="self-center">
                    <ChartDescription />
                  </div>

                  <div className="w-4/5">
                    <div className="flex justify-between">
                      <p>{t('pages.current.greenBar')}</p>
                      <div className="bg-primary w-1/4 h-4 self-center" />
                    </div>
                    <div className="flex justify-between">
                      <p>{t('pages.current.blueBar')}</p>
                      <div className="bg-blue w-1/4 h-4 self-center" />
                    </div>
                    <div className="flex justify-between">
                      <p>{t('pages.current.redBar')}</p>
                      <div className="bg-red-600 w-1/4 h-4 self-center" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-4 border-primary-lighter p-2">
                <div className=" bg-gray-200 p-2">
                  <p className="text-left mb-3">
                    {t('pages.current.myBill', {
                      billType: t(billType),
                      currentBill,
                    })}
                  </p>
                  <p className="text-left">
                    {t('pages.current.mean', {
                      billType: t(billType),
                      trimmedMean,
                    })}
                  </p>
                  {withinHighestTen && (
                    <p className="text-left">{t('pages.current.highestTen')}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      )}

      <div className="lg:my-8 md:my-5 md:mb-20">
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
