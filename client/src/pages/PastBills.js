import React from 'react';
import { LineChart } from '../components';

const bills = [120, 60, 40, 50, 80, 25, 55, 100, 120, 20, 30, 70];

const PastBills = () => <LineChart bills={bills} />;

export default PastBills;
