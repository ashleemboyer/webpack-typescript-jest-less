import * as React from 'react';
import styles from './Button.module.less';

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className={styles.Button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
