import React from 'react';
import { useTranslation } from 'react-i18next';

import ToggleContainer from '../components/ToggleContainer';
import Tips from '../components/Tips';
import Table from '../components/Table';

const Current = () => {
  const { t } = useTranslation();
  return (
    <>
      <ToggleContainer title={t('tipsToggleTitle')}>
        <Tips billType="electricity" />
      </ToggleContainer>
      <ToggleContainer title={t('compareTableTitle')}>
        <Table />
      </ToggleContainer>
    </>
  );
};

export default Current;
