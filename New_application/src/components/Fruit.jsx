export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <div>
      <li>
        {emoji} {name} {price} {soldout ? "soldout" : ""}
      </li>
    </div>
  );
}
