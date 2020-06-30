import React, { useState, useEffect } from 'react';
import { Spinner } from '../components';

// `/api/v1/bills/${userId}/stats?typeId=${typeId}&&billingMonth=${month}&&billingYear=${year}`

const Current = () => {
  const [bills, setBills] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`/api/v1/bills/1/stats?typeId=1&&billingMonth=1&&billingYear=2020`)
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) setBills([]);
        else setError(res.msg);
      })
      .catch(() => setError('Something went wrong'));
  }, []);
  if (!bills.length) return <Spinner className="w-8 h-8 m-auto spin" />;
  return (
    <h1>
      The following components will be rendered here: Bar Chart - Tips - Bills
      Table
    </h1>
  );
};

export default Current;
