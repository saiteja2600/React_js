function Helo({ name }) {
  return (
    <div className="container">
      <h1>
        {name.name} {name.message} {name.emoji}
        {name.seatnumber}
      </h1>
    </div>
  );
}
export default Helo;
