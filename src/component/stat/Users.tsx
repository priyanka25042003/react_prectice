import {useState} from 'react'

function Users() {

    let [data,setData]=useState(0)
   function updateData()
   { 
       setData(data+1)
   }
   return(
    <div className="App">
    <h1>{data}</h1>
   <button onClick={updateData}>update Data </button>
   </div>
   );
}
 export default Users;