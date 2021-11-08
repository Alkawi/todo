import React, { useState } from 'react';
import styles from './Counter.module.css';

function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
