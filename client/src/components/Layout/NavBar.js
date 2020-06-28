import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Home } from './Home.svg';
import { ReactComponent as PastBills } from './past bills.svg';
import { ReactComponent as Profile } from './profile.svg';

export default () => {
  const history = useHistory();
  return (
    <nav className="flex w-full fixed bottom-0 bg-mich-white">
      <button
        type="button"
        className="w-1/3 p-1 flex flex-col items-center text-primary-lighter border-primary-lighter border-t-2 border-r-2 cursor-pointer focus:outline-none"
        onClick={() => history.push('./home')}
      >
        <Home />
        Home
      </button>
      <button
        type="button"
        className="w-1/3 p-1 flex flex-col items-center text-primary-lighter border-primary-lighter border-t-2 cursor-pointer focus:outline-none"
        onClick={() => history.push('./past-bills')}
      >
        <PastBills />
        Past Bills
      </button>
      <button
        type="button"
        className="w-1/3 p-1 flex flex-col items-center text-primary-lighter border-primary-lighter border-t-2 border-l-2 cursor-pointer focus:outline-none"
        onClick={() => history.push('./profile')}
      >
        <Profile />
        My profile
      </button>
    </nav>
  );
};
