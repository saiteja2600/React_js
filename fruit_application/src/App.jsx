import { useState } from "react";
import Food from "./Food";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Food />
    </div>
  );
}

export default App;
