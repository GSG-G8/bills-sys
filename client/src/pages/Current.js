import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import ToggleContainer from '../components/ToggleContainer';
import Tips from '../components/Tips';
import Table from '../components/Table';

const Current = () => {
  const { t } = useTranslation();
  const { billType } = useParams();
  return (
    <>
      <ToggleContainer title={t('tipsToggleTitle')}>
        <Tips billType={billType} />
      </ToggleContainer>
      <ToggleContainer title={t('compareTableTitle')}>
        <Table />
      </ToggleContainer>
    </>
  );
};

export default Current;
