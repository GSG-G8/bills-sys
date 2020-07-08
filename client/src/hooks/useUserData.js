import { useState, useEffect } from 'react';
import axios from 'axios';
import { getBillsTypes } from '../util';

const useUserData = (logged) => {
  const [error, setError] = useState('');
  const [bills, setBills] = useState([]);
  const [types, setTypes] = useState([]);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    if (logged === true)
      (async () => {
        try {
          const billsPromise = axios.get('/api/v1/bills/me');
          const profilePromise = axios.get('/api/v1/profile');
          const [
            { data: billsData },
            { data: profileData },
          ] = await Promise.all([billsPromise, profilePromise]);
          setBills(billsData);
          setTypes(getBillsTypes(billsData));
          setProfile(profileData);
        } catch (err) {
          if (err.response) setError(err.response.data.message);
          else setError('Something went error');
        }
      })();
  }, [logged]);
  return { error, bills, types, profile };
};

export default useUserData;
