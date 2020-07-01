import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BillTypes, Loader } from '../components';

const Home = () => {
  const [error, setError] = useState('');
  const [billTypes, setBillTypes] = useState([]);

  const getBills = async () => {
    try {
      const res = await axios.get('/api/v1/bills/me');
      const { data: bills } = res;
      const billType = bills.reduce((types, { type }) => {
        const tempTypes = { ...types };
        tempTypes[type.name] = '';
        return tempTypes;
      }, {});
      setBillTypes(Object.keys(billType));
    } catch (err) {
      if (err.response) setError(err.response.data.message);
      else setError('Something went error');
    }
  };
  useEffect(() => {
    getBills();
  }, []);

  if (error)
    return (
      <div
        className="bg-magenta lg:w-1/2 md:w-2/3 border-l-8 border-kournikova text-mich-white p-4"
        role="alert"
      >
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );

  if (!billTypes?.length)
    return <Loader className="w-8 h-8 m-auto spin mt-64" />;
  return (
    <>
      <h1> Home </h1>
      <BillTypes billTypes={billTypes} />
    </>
  );
};

export default Home;
