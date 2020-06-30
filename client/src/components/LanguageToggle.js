import React from 'react';
import { useTranslation } from 'react-i18next';

const Toggle = () => {
  const { i18n } = useTranslation();

  const onLanguageSelect = (e) => i18n.changeLanguage(e.target.value);

  return (
    <select
      onChange={onLanguageSelect}
      className="bg-transparent hover:bg-white font-bold outline-none rounded"
    >
      <option value="ar" className="outline-none h-2 bg-transparent">
        ar
      </option>
      <option value="en" className="outline-none h-2 bg-transparent">
        en
      </option>
    </select>
  );
};

export default Toggle;
