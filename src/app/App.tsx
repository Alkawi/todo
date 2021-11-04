import React from 'react';
import ToDo from './components/ToDo/ToDo';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <Title>Hier steht der Titel</Title>;
    <ToDo
      isDone={false}
      title={'Schuhe putzen'}
      description={'Töte die Schuhe'}
    ></ToDo>
  );

export default App;
