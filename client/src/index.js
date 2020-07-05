import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Loader } from './components';
import './i18n';

import App from './App';
import './index.css';

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
