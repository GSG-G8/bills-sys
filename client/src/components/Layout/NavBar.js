import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Home } from './Home.svg';
import { ReactComponent as PastBills } from './past bills.svg';
import { ReactComponent as Profile } from './profile.svg';

export default () => {
  const history = useHistory();
  return (
    <nav className="flex w-full fixed bottom-0 right-0 lg:block lg:top-center lg:w-24 lg:right-auto">
      <button
        type="button"
        className="w-1/3 p-1 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter border-t-2 border-r-2 cursor-pointer focus:outline-none lg:w-full lg:pt-6 lg:pb-6"
        onClick={() => history.push('./home')}
      >
        <Home />
        Home
      </button>
      <button
        type="button"
        className="w-1/3 p-1 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter border-t-2 cursor-pointer focus:outline-none lg:border-b-2 lg:border-r-2 lg:w-full lg:pt-6 lg:pb-6"
        onClick={() => history.push('./past-bills')}
      >
        <PastBills />
        Past Bills
      </button>
      <button
        type="button"
        className="w-1/3 p-1 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter border-t-2 border-l-2 cursor-pointer focus:outline-none lg:border-t-0 lg:border-b-2 lg:border-l-0 lg:border-r-2 lg:w-full lg:pt-6 lg:pb-6"
        onClick={() => history.push('./profile')}
      >
        <Profile />
        My profile
      </button>
    </nav>
  );
};
