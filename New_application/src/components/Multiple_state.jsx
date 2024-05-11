// import { useState } from "react";

// export default function Multiple_state() {
//   const [count, setCount] = useState(0);
//   const [IncrementBy, setIncrementBy] = useState(0);
//   const [table, setTable] = useState([]);

//   function handleClick() {
//     setCount(count + IncrementBy);
//   }

//   function handleMultiple() {
//     const multiple = document.getElementById("mulitple").value;
//     let newIncrementBy = IncrementBy;
//     for (let i = 0; i < multiple; i++) {
//       newIncrementBy *= 10;
//     }
//     setIncrementBy(newIncrementBy);
//     generateMultiplicationTable(5); // Generate the multiplication table for 5
//   }

//   function generateMultiplicationTable(number) {
//     const table = [];
//     for (let i = 1; i <= 10; i++) {
//       table.push(`${number} x ${i} = ${number * i}`);
//     }
//     setTable(table);
//   }

//   return (
//     <div>
//       <h1>Count value is : {count}</h1>
//       <button onClick={handleClick}>Increment</button> &nbsp;
//       <button onClick={() => setCount(count - 1)}>Decrement</button> &nbsp;
//       <button onClick={() => setCount(0)}>Reset</button>
//       <br />
//       <input type="text" name="multiple" id="mulitple" />
//       <button onClick={handleMultiple}>Generate Multiplication Table</button>
//       <h1>We can increment by : {IncrementBy}</h1>
//       <ul>
//         {table.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function Multiple_state() {
//   const [A, setA] = useState(0);
//   const [B, setB] = useState(0);
//   //   const [C, setC] = useState(0);
//   const [result, setResult] = useState(0);

//   const handleCalculation = (operation) => {
//     const valueA = parseFloat(A);
//     const valueB = parseFloat(B);
//     if (isNaN(valueA) || isNaN(valueB)) {
//       setResult("");
//       return;
//     }

//     switch (operation) {
//       case "Addition":
//         setResult(valueA + valueB);
//         break;
//       case "Subtraction":
//         setResult(valueA - valueB);
//         break;
//       case "Multiplication":
//         setResult(valueA * valueB);
//         break;
//       case "Division":
//         if (valueB === 0) {
//           setResult("Cannot divide by zero");
//         } else {
//           setResult(valueA / valueB);
//         }
//         break;
//       default:
//         setResult("");
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="A">A: </label>
//       <input
//         type="text"
//         name="A"
//         id="A"
//         value={A}
//         onChange={(e) => setA(e.target.value)}
//       />
//       <br />
//       <label htmlFor="B">B: </label>
//       <input
//         type="text"
//         name="B"
//         id="B"
//         value={B}
//         onChange={(e) => setB(e.target.value)}
//       />
//       <br />
//       <label htmlFor="C">Result: </label>
//       <input type="text" name="C" id="C" value={result} readOnly />
//       <br />
//       <button onClick={() => handleCalculation("Addition")}>Addition</button>
//       &nbsp;
//       <button onClick={() => handleCalculation("Subtraction")}>
//         Subtraction
//       </button>
//       &nbsp;
//       <button onClick={() => handleCalculation("Multiplication")}>
//         Multiplication
//       </button>
//       &nbsp;
//       <button onClick={() => handleCalculation("Division")}>Division</button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function Multiple_state() {
//   const [A, setA] = useState(0);
//   const [B, setB] = useState(0);
//   const [option, setOption] = useState("");
//   const [result, setResult] = useState(0);

//   const handleCalculation = () => {
//     const valueA = parseFloat(A);
//     const valueB = parseFloat(B);

//     if (isNaN(valueA) || isNaN(valueB)) {
//       setResult("");
//       return;
//     }

//     switch (option) {
//       case "Addition":
//         setResult(valueA + valueB);
//         break;
//       case "Subtraction":
//         setResult(valueA - valueB);
//         break;
//       case "Multiplication":
//         setResult(valueA * valueB);
//         break;
//       case "Division":
//         if (valueB === 0) {
//           setResult("Cannot divide by zero");
//         } else {
//           setResult(valueA / valueB);
//         }
//         break;
//       default:
//         setResult("");
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="A">A: </label>
//       <input
//         type="text"
//         id="A"
//         name="A"
//         value={A}
//         onChange={(e) => setA(e.target.value)}
//       />
//       <br />
//       <label htmlFor="B">B: </label>
//       <input
//         type="text"
//         id="B"
//         name="B"
//         value={B}
//         onChange={(e) => setB(e.target.value)}
//       />
//       <br />
//       <label htmlFor="option">Choose: </label>
//       <select
//         name="option"
//         id="option"
//         value={option}
//         onChange={(e) => setOption(e.target.value)}
//       >
//         <option value="">Select</option>
//         <option value="Addition">Addition</option>
//         <option value="Subtraction">Subtraction</option>
//         <option value="Multiplication">Multiplication</option>
//         <option value="Division">Division</option>
//       </select>
//       <br />
//       <label htmlFor="result">Result: </label>
//       <input type="text" id="result" name="result" value={result} readOnly />
//       <br />
//       <button type="button" onClick={handleCalculation}>
//         Calculate
//       </button>
//     </div>
//   );
// }

import { useState } from "react";
export default function Multiple_state() {
  const [count, setCount] = useState(0);
  const [IncrementBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + IncrementBy);
  }
  function decrement() {
    setCount(count - IncrementBy);
  }
  function incrementBy() {
    setIncrementBy(IncrementBy + 1);
  }
  function decrementBy() {
    setIncrementBy(IncrementBy - 1);
  }

  return (
    <div>
      <h3>No of clicks : {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h3>Increment By : {IncrementBy}</h3>
      <button onClick={incrementBy}>Increment By</button>
      <button onClick={decrementBy}>Decrement By</button>
    </div>
  );
}
