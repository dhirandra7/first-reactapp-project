import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

const [count, setCount] = useState(0)
 
function handlecount(){
  const val=count +1;
  setCount(val);

}

  return (
    <div className="App">
      <h1>i am amity student</h1>
      <br/>
      <br/>
      <br/>

      <p>{
        count
      }</p>
      <br/>
      <button onClick={handlecount}>click me</button>
    </div>
  );
}

export default App;
