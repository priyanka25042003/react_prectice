import React from 'react'
function User(props:any) {
  return (
    <div>
        <h1> User components</h1>
        <button onClick={props.data}>Call data function</button>
    </div>
      )
    }
    
    export default User;