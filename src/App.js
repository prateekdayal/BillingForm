import React from "react";
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BillingForm from './Components/Billing/BillingForm';
import CreateBill from './Components/CreateBill/CreateBill';

function App() {
  const [customerData, setCustomerData] = useState([])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<BillingForm customerData = {customerData} setCustomerData = {setCustomerData}/>}/>
        <Route path='/create-bill' element = {<CreateBill customerData = {customerData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
