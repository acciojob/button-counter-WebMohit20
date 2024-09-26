
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  let [x,setCount] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>{x}</p>
        <button onClick={()=>setCount(x+1)}>Click</button>
    </div>
  )
}

export default App
