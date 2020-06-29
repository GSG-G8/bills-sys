import React from 'react';
import { BillTypes } from '../components';

const Home = () => (
  <>
    <h1> Home </h1>
    <BillTypes waterBill electBill internetBill mobileBill />
  </>
);

export default Home;
