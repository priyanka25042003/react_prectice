import React from 'react'

function Array() {
    // const students = ['priya', 'kisu', 'mittu', 'golu'];
    const students = [
      { Name: 'priya', Email: 'priya@gmail.com', Contact: 12346578 },
      { Name: 'kisu', Email: 'kisu@gmail.com', Contact: 12346523 },
      { Name: 'mittu', Email: 'mittu@gmail.com', Contact: 12346545 },
      { Name: 'golu', Email: 'golu@gmail.com', Contact: 9724946850 }
    ]
  
    // students.map((item) => {
    //   console.log("my Name is:", item)
  
    // });
  
    // for (let i = 0; i < students.length; i++) {
    //   console.log("In for loop my Name is:", students[i])
    // }
    return (
      <div className="App">
        <h1>Array</h1>
        <table>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
  
          {
            students.map((data) =>
              <tr>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Contact}</td>
              </tr>
            )
          }
        </table>
      </div>
    );
  }
  
  export default Array;
  