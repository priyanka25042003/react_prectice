import React from 'react'

class ShouldComponent extends React.Component<any,any>{
    constructor(props:any)
    {
        super(props);
        this.state={
            count:0
        }
     }
     ShouldComponentUpdate()
     {
         console.warn("shouldComponentUpdate",this.state.count);
         return true;
     }
     
     render() 
         {
            

        return(
            <div>
                <h1>should Component Update {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state})}}>Update Counter</button>
            </div>
    
        );
    }
}
export default ShouldComponent;