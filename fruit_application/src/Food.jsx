import { useState } from "react";

export default function Food() {
  const [food, setFood] = useState({ name: "", price: "", quantity: "" });
  const [foodList, setFoodList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (food.name && food.price && food.quantity) {
      setFoodList([...foodList, food]);
      setFood({ name: "", price: "", quantity: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          id="name"
          value={food.name}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          onChange={handleInputChange}
          type="text"
          name="price"
          id="price"
          value={food.price}
        />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input
          onChange={handleInputChange}
          type="text"
          name="quantity"
          id="quantity"
          value={food.quantity}
        />
        <br />
        <button type="submit">Add</button>
      </form>
      <ul>
        {foodList.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
