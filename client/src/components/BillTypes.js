import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { wifiIcon, waterIcon, electIcon, mobileIcon } from '../assets';

const BillsTypes = (props) => {
  const { waterBill, electBill, internetBill, mobileBill } = props;

  const [bill, setBill] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/v1/types')
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) setBill(res.data);
        setError(res.error);
      })
      .catch(() => setError('Something went error'));
  }, []);
  if (!bill?.length)
    return (
      <div
        className="bg-magenta lg:w-1/2 md:w-2/3 border-l-8 border-kournikova text-mich-white p-4"
        role="alert"
      >
        <p className="font-bold">Error</p>
        <p>{error}.</p>
      </div>
    );
  return (
    <>
      <h1>BillsTypes</h1>
      <div className="flex flex-wrap justify-between text-2xl text-mich-white">
        {waterBill && (
          <Link
            to="/current"
            className="bg-kournikova hover:bg-kournikova-lighter px-3 py-1 rounded my-2 h-40 w-12/25 sm:w-8/25 md:w-23/100 flex flex-wrap justify-center "
          >
            <div className="h-24 pt-2 flex">
              <img src={waterIcon} alt="water" />
            </div>
            <p className="w-full text-center">{bill[0].name}</p>
          </Link>
        )}

        {electBill && (
          <Link
            to="/current"
            className="bg-blueBell hover:bg-blueBell-lighter px-3 py-1 rounded my-2 h-40 w-12/25 sm:w-8/25 md:w-23/100 flex flex-wrap justify-center"
          >
            <div className="h-24 pt-2 flex">
              <img src={electIcon} alt="electricity" />
            </div>
            <p className="w-full text-center">{bill[1].name}</p>
          </Link>
        )}

        {internetBill && (
          <Link
            to="/current"
            className="bg-magenta hover:bg-magenta-lighter px-3 py-1 rounded my-2 h-40 w-12/25 sm:w-8/25 md:w-23/100 flex flex-wrap justify-center"
          >
            <div className="h-24 pt-2 flex">
              <img src={wifiIcon} alt="wifi" />
            </div>
            <p className="w-full text-center">{bill[2].name}</p>
          </Link>
        )}

        {mobileBill && (
          <Link
            to="/current"
            className="bg-blue hover:bg-blue-lighter px-3 py-1 rounded my-2 h-40 w-12/25 sm:w-8/25 md:w-23/100 flex flex-wrap justify-center"
          >
            <div className="h-24 pt-2 flex">
              <img src={mobileIcon} alt="gas" />
            </div>
            <p className="w-full text-center">{bill[3].name}</p>
          </Link>
        )}
      </div>
    </>
  );
};

BillsTypes.defaultProps = {
  waterBill: false,
  electBill: false,
  internetBill: false,
  mobileBill: false,
};

BillsTypes.propTypes = {
  waterBill: PropTypes.bool,
  electBill: PropTypes.bool,
  internetBill: PropTypes.bool,
  mobileBill: PropTypes.bool,
};

export default BillsTypes;
