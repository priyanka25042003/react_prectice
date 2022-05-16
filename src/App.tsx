import React from 'react';
import logo from './logo.svg';
import './App.css';
import Array from './component/Array';
import BootstrapTable from './component/BootstrapTable';
import { Table } from "react-bootstrap";
import NestedArray from './component/NestedArray';
import ReuseComponent from './component/ReuseComponent';



function App() {
  const Users = [
    {
      name: 'priya', email: 'priya@gmail.com', contact: "465"
    },
    {
      name: 'kisu', email: 'kisu@gmail.com', contact: "523"
    },
    {
      name: 'mittu', email: 'mittu@gmail.com', contact: "654"
    },
    {
      name: 'golu', email: 'golu@gmail.com', contact: "578"
    },
  ]

  return (
    <div className="App">
      {/* <h1>Reuse Component with List</h1> */}
      {/* {
        Users.map((item,i) =>
        <ReuseComponent data={item} />
        )
      } */}
      
<BootstrapTable/>

    </div>
  );
}

export default App;
