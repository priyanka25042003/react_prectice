import PropTypes from 'prop-types'
import React from 'react'

 export class Student extends React.Component<any,any> {

  
  render() 
  {
    console.log(this.props)
    return (
      <div style={{backgroundColor:'pink' , margin: 10 }}>
         <h1>Hello{this.props.name}</h1>
         <h1>{this.props.email}</h1>
         </div>
    )
  }
}

export default Student; 