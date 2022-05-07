import React, { useState } from 'react';
import './App.css';


function App() {

    // console.log(useState);
    // var val = 'priyanka';
    const [myName, setMyName] =useState("Priyanka thakor");

    // const myName = () => {
    //     //  val ="Thakor";
    //     //  console.log(val);
    //     setMyName("Thakor");
    // }

    // console.log(myName);
    return (
        <div>
            <h1>Priyanka {myName}</h1>
            <button className="btn" onClick={(e)=>setMyName}>
                Click me
            </button>
        </div>
    );
}

export default App;
