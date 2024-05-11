export default function Message() {
  function handleClick() {
    console.log("button clicked");
    alert("button clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}
