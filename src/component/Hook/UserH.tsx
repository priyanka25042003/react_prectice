
import React, { useEffect, useState } from 'react';
import '../style.css';
function App(Props: any) {
  // const [data,setData]=useState("priya")
  const [count, setcount] = useState(0)
  useEffect(() => {
    console.log("userEffect")
  })

  return (
    <div className="App">
      <h1>Count Props: {Props.count}</h1>
      <h1>Data Props: {Props.data}</h1>
      <button onClick={() => setcount(count + 1)}>Update Counter</button>
      {/* <h1>{data}</h1>
        <button onClick={()=>setData("kisuu")}>Update Data</button> */}

    </div>
  )
}

export default App;

