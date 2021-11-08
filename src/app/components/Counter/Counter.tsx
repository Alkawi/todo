import React from 'react';

type counterProps = {
  count: number;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
};

function Counter({
  count,
  onIncrementClick,
  onDecrementClick,
}: counterProps): JSX.Element {
  return (
    <div>
      <button onClick={onDecrementClick}>-</button>
      <span>{count}</span>
      <button onClick={onIncrementClick}>+</button>
    </div>
  );
}

export default Counter;
