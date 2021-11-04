import React from 'react';
import ToDo from './components/ToDo/ToDo';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  return (
    <div>
      <Title>Hier steht der Titel</Title>
      <Form />
      <ToDo
        isDone={false}
        title={'Schuhe putzen'}
        description={'Töte die Schuhe'}
      ></ToDo>
    </div>
  );
}

export default App;
