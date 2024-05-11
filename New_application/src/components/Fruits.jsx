import Fruit from "./fruit";

export default function Fruits() {
  const Fruits = [
    {
      name: "mango",
      price: 10,
      emoji: "🍊",
      soldout: false,
    },
    {
      name: "apple",
      price: 20,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: "banana",
      price: 30,
      emoji: "🍌",
      soldout: true,
    },
    {
      name: "grapes",
      price: 40,
      emoji: "🍇",
      soldout: false,
    },
  ];
  return (
    <div>
      <ul>
        {Fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
