import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import TypesColors from '../assets/typesIcons';

const BillsTypes = ({ userBillTypes, toPage }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap justify-between text-2xl text-mich-white md:w-12/25 m-auto">
      {userBillTypes.map(({ name, id }) => {
        const Icon = TypesColors[name].component;
        return (
          <Link
            key={id}
            to={`/${toPage}/${name}`}
            className={`${TypesColors[name].color} ${TypesColors[name].hoverColor} px-3 py-1 rounded my-2 h-40 lg:h-auto lg:content-around w-12/25 flex flex-wrap justify-center`}
          >
            <div className="lg:pt-2 flex">
              <Icon className="self-center h-20 w-16 lg:w-20" />
            </div>
            <p className="w-full text-center capitalize lg:p-3 md:text-2xl text-xl">
              {t(name)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

const { shape, arrayOf, number, string } = PropTypes;

BillsTypes.propTypes = {
  userBillTypes: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
  toPage: string.isRequired,
};

export default BillsTypes;
