import React from 'react'
function User(props:any) {
  return (
    <div>
      {/* <h1> User components</h1>
      <header className="App-header">
      <p>
          Edit <code>src/App.tsx</code> priyanka.
        </p> */}
        <h1> User components</h1>
        <button onClick={props.data}>Call data function</button>
  
      {/* </header> */}
    </div>
  )
}

export default User;