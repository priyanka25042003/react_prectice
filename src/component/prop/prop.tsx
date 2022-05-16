import React from 'react'
function Prop(props: any)
 {
  console.log(props.name)
  return (
    <div style={{backgroundColor:"pink" , margin: 10 }}>
      <h1>Hello {props.name}</h1>
      <h2>Email : {props.email}</h2>
      <h3>Address: {props.other.Address}</h3>
    </div>
  )
}

export default Prop