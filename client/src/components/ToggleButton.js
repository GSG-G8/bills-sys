import React from 'react';
import { useTranslation } from 'react-i18next';

const Toggle = () => {
  const { i18n } = useTranslation();

  const onLanguageSelect = (e) => i18n.changeLanguage(e.target.value);

  return (
    <select onChange={onLanguageSelect}>
      <option value="ar">ar</option>
      <option value="en">en</option>
    </select>
  );
};

export default Toggle;
