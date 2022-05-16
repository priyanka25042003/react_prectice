import '../../src/App.css';
import React from 'react'
import { Table } from "react-bootstrap";

function BootstrapTable() {
    const Users = [
      { Name: 'priya', Email: 'priya@gmail.com', Contact: 46578 },
      { Name: 'kisu', Email: 'kisu@gmail.com', Contact: 46523 },
      { Name: 'mittu', Email: 'mittu@gmail.com', Contact: 46545 },
      { Name: 'golu', Email: 'golu@gmail.com', Contact: 46578 }
    ]
  
  
    return (
      <div className="App">
        <h1>List with Bootstrap Table</h1>
        <table className='table' >
          <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
          {
            Users.map((item,i) =>
              <tr key={i}>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Contact}</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BootstrapTable;    
  