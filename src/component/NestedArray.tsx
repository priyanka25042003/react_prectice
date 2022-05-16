import '../App.css';
import React from 'react'
// import  table  from "react-bootstrap/table";

function NestedArray() {
    const Users = [
      {
        Name: 'priya', Email: 'priya@gmail.com', Address: [
          { Hno: "10", city: 'Ahmedabad', country: 'India' },
          { Hno: "11", city: 'Krela', country: 'India' },
          { Hno: "12", city: 'Mumbai', country: 'India' },
          { Hno: "13", city: 'Dilhi', country: 'India' },
        ]
      },
      {
        Name: 'kisu', Email: 'kisu@gmail.com', Address: [
          { Hno: "10", city: 'Ahmedabad', country: 'India' },
          { Hno: "11", city: 'Krela', country: 'India' },
          { Hno: "12", city: 'Mumbai', country: 'India' },
          { Hno: "13", city: 'Dilhi', country: 'India' },
        ]
      },
      {
        Name: 'mittu', Email: 'mittu@gmail.com', Address: [
          { Hno: "10", city: 'Ahmedabad', country: 'India' },
          { Hno: "11", city: 'Krela', country: 'India' },
          { Hno: "12", city: 'Mumbai', country: 'India' },
          { Hno: "13", city: 'Dilhi', country: 'India' },
        ]
      },
      {
        Name: 'golu', Email: 'golu@gmail.com', Address: [
          { Hno: "10", city: 'Ahmedabad', country: 'India' },
          { Hno: "11", city: 'Krela', country: 'India' },
          { Hno: "12", city: 'Mumbai', country: 'India' },
          { Hno: "13", city: 'Dilhi', country: 'India' },
        ]
      }
    ]
  
  
    return (
      <div className="App">
        <h1>Nested Array</h1>
        <table className='table' >
          <tbody>
            <tr>
              <td>S.N</td>
              <td>Name</td>
              <td>Email</td>
              <td>Address</td>
            </tr>
          </tbody>
          {
            Users.map((item,i) =>
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>
                  <table className='table'>
                    <tbody>{
                      item.Address.map((data) =>
                        <tr>
                          <td>{data.Hno}</td>
                          <td>{data.city}</td>
                          <td>{data.country}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </td>
              </tr>
            )
          }
        </table>
      </div>
    );
  }
  
  export default NestedArray;
  