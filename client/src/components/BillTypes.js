import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import TypesColors from '../assets/typesIcons';

const BillsTypes = ({ userBillTypes, toPage }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap justify-between text-2xl text-mich-white">
      {userBillTypes.map(({ name, id }) => {
        const Icon = TypesColors[name].component;
        return (
          <Link
            key={id}
            to={`/${toPage}/${name}`}
            className={`${TypesColors[name].color} ${TypesColors[name].hoverColor} px-3 py-1 rounded my-2 h-40 w-12/25 sm:w-8/25 md:w-23/100 flex flex-wrap justify-center`}
          >
            <div className="h-24 pt-2 flex">
              <Icon className="self-center" />
            </div>
            <p className="w-full text-center capitalize">{t(name)}</p>
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
