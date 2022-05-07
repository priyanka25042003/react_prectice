import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Constructor extends Component<any, any> {
  constructor(prop: any) 
  {
    super(prop);
    this.state = {
      data: "priya"
    }
  }
  render() {
    return (
      <div>
        <h1>Hello World {this.state.data}</h1 >
      </div>
    )
  }
}

export default Constructor;