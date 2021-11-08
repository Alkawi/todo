import React, { useState } from 'react';
import ToDo from './components/ToDo/ToDo';
import Title from './components/Title/Title';
import Counter from './components/Counter/Counter';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  function decrement() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <Counter
        onDecrementClick={decrement}
        onIncrementClick={increment}
        count={count}
      />
      <Title>Hier steht der Titel</Title>
      <ToDo
        isDone={false}
        title={'Schuhe putzen'}
        description={'Töte die Schuhe'}
      ></ToDo>
    </div>
  );
}
export default App;
