// component that returns a h1 and displays a title
// style it to your liking
import React from 'react';
import type { ReactNode } from 'react';
import styles from './Title.module.css';

type TitleProps = { children: ReactNode };

function Title({ children }: TitleProps): JSX.Element {
  return <h1 className={styles.title}>{children}</h1>;
}

export default Title;
