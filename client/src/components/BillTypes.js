import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TypesColors from '../assets/typesIcons';

const BillsTypes = ({ userBillTypes }) => (
  <div className="flex flex-wrap justify-between text-2xl text-mich-white px-6 lg:px-24">
    {userBillTypes.map(({ name, id }) => {
      const Icon = TypesColors[name].component;
      return (
        <Link
          key={id}
          to={`/current/${id}`}
          className={`${TypesColors[name].color} ${TypesColors[name].hoverColor} px-3 py-1 rounded my-2 h-40 w-12/25 sm:w-8/25 md:w-23/100 flex flex-wrap justify-center`}
        >
          <div className="h-24 pt-2 flex">
            <Icon className="self-center" />
          </div>
          <p className="w-full text-center capitalize">{name}</p>
        </Link>
      );
    })}
  </div>
);

BillsTypes.propTypes = {
  userBillTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BillsTypes;
