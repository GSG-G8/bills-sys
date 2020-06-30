import React from 'react';
import { useTranslation } from 'react-i18next';

const Toggle = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button
        className="bg-transparent hover:bg-green-600 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        type="submit"
        onClick={() => {
          i18n.changeLanguage('ar');
        }}
      >
        Ar
      </button>
      <button
        className="bg-transparent hover:bg-green-600 text-blue-500 font-semibold hover:text-white py-2 px-4 hover : border-green-600 rounded"
        type="submit"
        onClick={() => {
          i18n.changeLanguage('en');
        }}
      >
        EN
      </button>
    </div>
  );
};

export default Toggle;
