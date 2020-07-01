import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TypesColors from '../assets/typesIcons';

const BillsTypes = ({ billTypes }) => (
  <div className="flex flex-wrap justify-between text-2xl text-mich-white px-6 lg:px-24">
    {billTypes.map((type) => {
      const Icon = TypesColors[type].component;
      return (
        <Link
          to="/current"
          className={`${TypesColors[type].color} ${TypesColors[type].hoverColor} px-3 py-1 rounded my-2 h-40 w-12/25 sm:w-8/25 md:w-23/100 flex flex-wrap justify-center`}
        >
          <div className="h-24 pt-2 flex">
            <Icon className="self-center" />
          </div>
          <p className="w-full text-center capitalize">{type}</p>
        </Link>
      );
    })}
  </div>
);

BillsTypes.propTypes = {
  billTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BillsTypes;
