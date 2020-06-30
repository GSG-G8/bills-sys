import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../ToggleButton';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-green-600 flex justify-between p-6">
      <h1>{t('logo')}</h1>
      <LanguageToggle />
    </div>
  );
};
export default Header;
