import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../LanguageToggle';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-primary py-4">
      <div className="flex justify-between mx-auto lg:w-4/5 w-11/12">
        <Link
          className="text-white md:text-2xl font-bold tracking-wider"
          to="/home"
        >
          {t('logo')}
        </Link>
        <LanguageToggle />
      </div>
    </div>
  );
};
export default Header;
