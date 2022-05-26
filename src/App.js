import { useState, useEffect } from 'react';
import Clock from './Clock.js';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <p>
        색상을 고르시오 : {' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">라이트코랄</option>
          <option value="midnightblue">미드나잇블루</option>
          <option value="tomato">토마토</option>
          <option value="rebeccapurple">레베카퍼플</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}