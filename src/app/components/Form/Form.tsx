import React from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  return (
    <div className={styles.formContainer}>
      <form action="" className={styles.form}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
