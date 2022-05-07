import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbarr from './component/navbarr/navbarr';
import Prop from './component/prop/prop';
import User from './component/stat/User';
import StatClass from './component/stat/statClass';
import Student from './component/prop/Student';
import { render } from '@testing-library/react';
import { setEnvironmentData } from 'worker_threads';
import Profile from './component/Profile';
import Login from './component/Login';
import Members from './component/stat/Members';
import Constructor from './component/Method/Constructor';
import Render from './component/Method/Render';
import Component from './component/Method/Component';
import ComponentWillUnmount from './component/Method/ComponentWillUnmount';
import UserH from './component/Hook/UserH';
import StateHook from './component/Hook/StateHook';



 
function App() {
 
  return (
    <div className="App">
      
      <UserH />
      {/* <UseEffect /> */}
      {/* <StateHook /> */}
      {/* <Navbarr /> */}
    </div>
  )
}



export default App;
