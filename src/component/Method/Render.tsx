import React from 'react'

class Render extends React.Component<any,any>{
    constructor(props:any)
    {
        super(props);
        this.state={
           Email:"Priya@test.com"
        }
    }
    render() 
        {
            console.warn("Render method",this.state.Email)
            return(
                <div>
                    <h1>User Component </h1>
                    <button onClick={(e)=>this.setState({Email:"Thakor@test.com"})} >Update Email</button>
                </div>
        
            )
        }
    }
export default Render;