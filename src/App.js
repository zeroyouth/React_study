import './App.css';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(3);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button style={{
      width: "150px",
      height: "150px",
      backgroundColor: "black",
      color: "white",
      margin: "10px",
      borderRadius: "50%"
    }} onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  return (
    <div style={{
      maxWidth: "350px",
      minHeight: "100vh",
      backgroundColor: "#eee",
      padding: "15px",
      margin: "20px auto",
      borderRadius: "5px",
      border: "1px solid #ddd"
    }}>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}