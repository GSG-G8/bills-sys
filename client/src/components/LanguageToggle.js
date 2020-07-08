import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Toggle = () => {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState('en');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return (
    <select
      value={lang}
      onChange={({ target: { value } }) => {
        setLang(value);
      }}
      className="bg-transparent font-bold outline-none rounded text-white hover:bg-primary-lighter p-1"
    >
      <option value="ar">{t('language.ar')}</option>
      <option value="en">{t('language.en')}</option>
    </select>
  );
};

export default Toggle;
