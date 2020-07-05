import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../LanguageToggle';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary flex justify-between p-6 lg:px-16">
      <span className="text-white font-bold">{t('logo')}</span>
      <LanguageToggle />
    </div>
  );
};
export default Header;
