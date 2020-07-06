import React from 'react';
import propTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const BarChart = ({ centers, frequencies, colors }) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 m-auto h-half-screen lg:w-2/3">
      <Bar
        data={{
          labels: centers,
          datasets: [
            {
              label: t('pages.current.frequency'),
              data: frequencies,
              backgroundColor: colors,
              barThickness: 'flex',
              barPercentage: 1,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: t('pages.current.chartTitle'),
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                gridLines: {
                  offsetGridLines: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: t('pages.current.xAxisLabel'),
                  fontSize: 16,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: Math.max(...frequencies) + 5,
                  stepSize: 5,
                },
                scaleLabel: {
                  display: true,
                  labelString: t('pages.current.yAxisLabel'),
                  fontSize: 16,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

BarChart.propTypes = {
  centers: propTypes.arrayOf(propTypes.number).isRequired,
  frequencies: propTypes.arrayOf(propTypes.number).isRequired,
  colors: propTypes.arrayOf(propTypes.string).isRequired,
};

export default BarChart;
