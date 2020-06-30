import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';

import App from './App';
import './index.css';

ReactDOM.render(
  <Suspense fallback={<div />}>
    <App useSuspense />
  </Suspense>,
  document.getElementById('root')
);
