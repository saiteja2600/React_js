import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import Helo from "./components/Hello";
import Fruits from "./components/fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/message";
import Counter from "./components/Counter";
import Multiple_state from "./components/Multiple_state";
import Form from "./components/Form";
function App() {
  // const person = {
  //   name: "Vishwas",
  //   message: "Hello",
  //   emoji: "😊",
  //   seatnumber: [1, 2, 3, 4],
  // };

  return (
    <div className="App">
      <h1>
        {/* <Fruits /> */}
        {/* <Fruits /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Multiple_state /> */}
        <Form />
      </h1>
      {/* <Helo name={person} /> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
