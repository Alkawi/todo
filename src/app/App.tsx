import React, { useState } from 'react';
import ToDo from './components/ToDo/ToDo';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  const [todos, setTodos] = useState([
    { isDone: false, title: 'Einkaufen', description: 'Hafermilch' },
    { isDone: true, title: 'Schuhe putzen', description: 'Schuhschrank' },
    { isDone: false, title: 'Saiten wechseln', description: 'Ibanez GRG170DX' },
  ]);

  function handleSubmit(todo: {
    title: string;
    description: string;
    isDone: boolean;
  }): void {
  
    const newTodos = todos.slice();
    newTodos.push(todo);
    setTodos(newTodos);
  }

  function renderCards(
    todos: { title: string; description: string; isDone: boolean }[]
  ) {
    return todos.map((todo) => {
      return (
        <ToDo
          key={todo.title}
          title={todo.title}
          description={todo.description}
          isDone={todo.isDone}
        />
      );
    });
  }

  return (
    <div>
      <Title>Hier steht der Titel</Title>
      <Form onSubmit={handleSubmit} />
      {renderCards(todos)}
    </div>
  );
}

export default App;
