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
    <div className="mx-4 lg:mx-16 lg:mx-8 lg:my-8">
      <ToggleContainer title={t('tipsToggleTitle')}>
        <Tips billType={billType} />
      </ToggleContainer>
      <ToggleContainer title={t('compareTableTitle')}>
        <Table />
      </ToggleContainer>
    </div>
  );
};

export default Current;
