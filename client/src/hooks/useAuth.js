import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [logged, setLogged] = useState('loading');
  const [userId, setUserId] = useState('');

  const checkIfLogged = async () => {
    try {
      const response = await axios.get('/api/v1/auth');
      setUserId(response.data.user.id);
      setLogged(true);
    } catch (err) {
      setLogged(false);
      setUserId('');
    }
  };

  useEffect(() => {
    checkIfLogged();
  }, []);

  return { logged, setLogged, userId, setUserId };
};

export default useAuth;
