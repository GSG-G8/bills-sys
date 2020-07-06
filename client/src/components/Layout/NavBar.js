import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Home } from './Home.svg';
import { ReactComponent as PastBills } from './past bills.svg';
import { ReactComponent as Profile } from './profile.svg';

const NavBar = () => {
  const history = useHistory();
  return (
    <nav className="flex w-full fixed bottom-0 right-0 lg:block lg:top-center lg:w-12 lg:right-auto">
      <button
        type="button"
        className="w-1/3  px-1 py-2 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter border-t-2 cursor-pointer focus:outline-none lg:border-r-2 lg:border-l-2 lg:px-0 lg:py-4 lg:w-full"
        onClick={() => history.push('/home')}
      >
        <Home />
      </button>
      <button
        type="button"
        className="w-1/3  px-1 py-2 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter border-t-2 cursor-pointer focus:outline-none lg:border-r-2  lg:border-l-2 lg:border-t-0  lg:px-0 lg:py-4 lg:w-full"
        onClick={() => history.push('/past-bills')}
      >
        <PastBills />
      </button>
      <button
        type="button"
        className="w-1/3 px-1 py-2 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter border-t-2 cursor-pointer focus:outline-none lg:border-t-0 lg:border-b-2 lg:border-l-2 lg:border-r-2 lg:border-t-0 lg:px-0 lg:py-4  lg:w-full"
        onClick={() => history.push('/profile')}
      >
        <Profile />
      </button>
    </nav>
  );
};

export default NavBar;
