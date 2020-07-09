import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import {
  Home,
  PastBills,
  Profile,
  HomeActive,
  PastBillsActive,
  ProfileActive,
} from '../../assets/navbarIcons';

const CONFIG = {
  HOME: { path: '/home', Icon: Home, ActiveIcon: HomeActive },
  PAST_BILLS: {
    path: '/past-bills',
    Icon: PastBills,
    ActiveIcon: PastBillsActive,
  },
  PROFILE: { path: '/profile', Icon: Profile, ActiveIcon: ProfileActive },
};

const NavBar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const onClick = (page) => {
    history.push(page);
  };
  return (
    <nav className="flex w-full fixed bottom-0 right-0 lg:block lg:top-center lg:w-12 lg:right-auto shadow-navbar lg:h-48">
      {Object.values(CONFIG).map(({ Icon, path, ActiveIcon }) => (
        <button
          type="button"
          className="w-1/3  px-1 py-2 flex flex-col items-center bg-mich-white text-primary-lighter border-primary-lighter cursor-pointer focus:outline-none lg:px-0 lg:py-4 lg:w-full"
          onClick={() => onClick(path)}
        >
          {pathname.includes(path) ? <ActiveIcon /> : <Icon />}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
