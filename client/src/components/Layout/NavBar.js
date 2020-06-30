import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Home } from './Home.svg';
import { ReactComponent as PastBills } from './past bills.svg';
import { ReactComponent as Profile } from './profile.svg';

const NavBar = () => {
  const history = useHistory();
  return (
    <nav className="flex w-full fixed bottom-0 right-0 lg:block lg:top-center lg:w-24 lg:right-auto">
      <button
        type="button"
        className="w-1/3 pr-1 pl-1 pt-2 pb-2 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter border-t-2 border-r-2 cursor-pointer focus:outline-none lg:pl-0 lg:pr-0 lg:pt-4 lg:pb-4 lg:w-1/2"
        onClick={() => history.push('./home')}
      >
        <Home />
      </button>
      <button
        type="button"
        className="w-1/3 pr-1 pl-1 pt-2 pb-2 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter border-t-2 cursor-pointer focus:outline-none lg:border-b-2 lg:border-r-2  lg:pl-0 lg:pr-0 lg:pt-4 lg:pb-4 lg:w-1/2"
        onClick={() => history.push('./past-bills')}
      >
        <PastBills />
      </button>
      <button
        type="button"
        className="w-1/3 pr-1 pl-1 pt-2 pb-2 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter border-t-2 border-l-2 cursor-pointer focus:outline-none lg:border-t-0 lg:border-b-2 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-0 lg:pt-4 lg:pb-4  lg:w-1/2"
        onClick={() => history.push('./profile')}
      >
        <Profile />
      </button>
    </nav>
  );
};

export default NavBar;
