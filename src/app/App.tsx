import React from 'react';
import ToDo from './components/ToDo/ToDo';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  function handleSubmit(todo) {
    const title = todo.title;
    const description = todo.description;

    console.log(title);
    console.log(description);
  }

  return (
    <div>
      <Title>Hier steht der Titel</Title>
      <Form onSubmit={handleSubmit} />
      <ToDo
        isDone={false}
        title={'Schuhe putzen'}
        description={'Töte die Schuhe'}
      ></ToDo>
    </div>
  );
}

export default App;
