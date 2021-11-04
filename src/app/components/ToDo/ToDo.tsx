import React from 'react';
import styles from './ToDo.module.css';

type ToDoProps = {
  isDone: boolean;
  title: string;
  description: string;
};

function ToDo(props: ToDoProps): JSX.Element {
  return (
    <div
      className={`${styles.todo} ${props.isDone ? styles.green : styles.red}`}
    >
      <h2>{props.title}</h2>
      <span>{props.description}</span>
    </div>
  );
}

export default ToDo;
