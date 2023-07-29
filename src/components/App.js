
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {inputValue}
        <Child inputValue={inputValue} handleInput={handleInput} />
    </div>
  )
}

export default App
