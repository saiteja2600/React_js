import { useState } from "react";
export default function Form() {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  //   function handleChange(e) {
  //     setName(e.target.value);
  //   }
  return (
    <div>
      <h1>Form</h1>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })} // spread operator
          type="text"
          value={name.firstname}
          id="name"
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      {name.firstname} {name.lastname}
    </div>
  );
}
