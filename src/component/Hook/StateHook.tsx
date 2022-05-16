import React, { useState } from 'react';
import './hook.css';
import '../../App.css'


function StatHook() {

    // console.log(useState);
    // var val = 'priyanka';
    const [myNamee, setMyName] =useState({
        name:'fasd',
        phone:65656515
    });
    
    function myName ()  {
        let val ={
            name:'fasdgahdf',
            phone:16579561
        };
         console.log(val);
        setMyName(val);
    }

    // console.log(myName);
    return (
        <div>
            <h1>{myNamee.name}</h1>
            <h1>{myNamee.phone}</h1>
            <button className="btn" onClick={myName}>
                Click me
            </button>
        </div>
    );
}

export default StatHook;
