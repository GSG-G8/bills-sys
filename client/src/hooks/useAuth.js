import { useState, useEffect } from 'react';

const useAuth = () => {
  const [logged, setLogged] = useState('loading');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetch('/api/v1/auth')
      .then((res) => res.json())
      .then((result) => {
        if (result.statusCode === 200) {
          setLogged(true);
          setUserId(result.user.id);
        } else {
          setLogged(false);
          setUserId('');
        }
      })
      .catch(() => {
        setLogged(false);
        setUserId('');
      });
  }, []);

  return { logged, setLogged, userId, setUserId };
};

export default useAuth;
