import React from 'react';
import ToDo from './components/ToDo/ToDo';

function App(): JSX.Element {
  return (
    <ToDo
      isDone={false}
      title={'Schuhe putzen'}
      description={'Töte die Schuhe'}
    ></ToDo>
  );
}

export default App;
