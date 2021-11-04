import React, { useState } from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <form className={styles.form}>
        <label>
          Title{' '}
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Description{' '}
          <input
            type="text"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
