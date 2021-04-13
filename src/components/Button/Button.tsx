import * as React from 'react';
import styles from './Button.module.less';

const Button = () => (
  <button className={styles.Button} onClick={() => console.log('clicked!')}>
    click me!
  </button>
);

export default Button;
