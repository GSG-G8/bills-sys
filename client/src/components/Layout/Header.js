import React from 'react';
import { Link } from 'react-router-dom';
import LanguageToggle from '../LanguageToggle';
import logo from '../../assets/logo.png';

const Header = () => (
  <div className="bg-primary py-2">
    <div className="flex justify-between mx-auto lg:w-4/5 w-11/12">
      <Link to="/home">
        <img src={logo} alt="Bills System" className="w-40 sm:w-auto" />
      </Link>
      <LanguageToggle />
    </div>
  </div>
);
export default Header;
