import React from 'react'

class Component extends React.Component<any,any>{
    constructor(props:any)
    {
        super(props);
       this.state={
           name:"priya"
       }
    }
    componentDidMount()
    {
        console.warn("componentDidMount")
    }
    render() 
        {
            console.warn("Render")
            
        
            return(
                <div>
                    <h1>Component Did Mount {this.state.name}</h1>
                    <button onClick={()=>{this.setState({name:"thakor"})}}>Update Name</button>
                </div>
        
            )
        }
    }
export default Component;