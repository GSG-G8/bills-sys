import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Toggle = () => {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return (
    <select
      value={lang}
      onChange={({ target: { value } }) => {
        setLang(value);
      }}
      className="bg-transparent hover:bg-white font-bold outline-none rounded"
    >
      <option value="ar" className="focus:outline-none h-2 bg-transparent">
        {t('language.ar')}
      </option>
      <option value="en" className="focus:outline-none h-2 bg-transparent">
        {t('language.en')}
      </option>
    </select>
  );
};

export default Toggle;
