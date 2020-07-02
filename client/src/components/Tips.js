import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import { useTranslation } from 'react-i18next';
import enTips from '../assets/enTips.json';
import arTips from '../assets/arTips.json';

const Tips = ({ billType }) => {
  const { t } = useTranslation();
  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (t('tips') === 'arabicTips') setTips(arTips[billType]);
    else setTips(enTips[billType]);
  }, [billType, setTips, t]);
  return (
    <div>
      <ol type="1" className="mx-2 list-decimal rtl:arabic-ol">
        {tips.map(({ id, text }) => (
          <li key={id} className="p-2">
            {text}
          </li>
        ))}
      </ol>
    </div>
  );
};

Tips.propTypes = {
  billType: propTypes.oneOf(['water', 'electricity', 'mobile', 'internet'])
    .isRequired,
};

export default Tips;
