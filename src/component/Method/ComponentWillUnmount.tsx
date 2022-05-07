import React from 'react'

class ComponentWillUnmount extends React.Component{
    componentWillUnmount()
    {
        console.warn(" componentWillUnmount called")
    }
    render() {
        return (
            <div className="App">    
            <h1>Student Component Will Unmount</h1>
            
            </div>
        )
    }
}

export default ComponentWillUnmount;


// class App extends React.Component<any, any> {
//     constructor(state: any) {
//       super(state);
//       this.state = {
//         show: true
//       }
//     }
  
//     render() {
  
//       return (
//         <div className="App">
//           {
//              this.state.show ? <ComponentWillUnmount /> :<h1>Child component Remove</h1>
//           }
          
  
//           <button onClick={() => this.setState({ show: !this.state.show })} >Toggle Child Component</button>
//           {/* <ShouldComponent /> */}
  
  
//         </div>