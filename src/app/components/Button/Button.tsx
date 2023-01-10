import React, { ReactNode } from 'react';
import classes from './Button.module.scss';

interface IButtonProps {
  children: ReactNode;
}

function Button({ children }: IButtonProps): JSX.Element {
  return <button className={classes.button}>{children}</button>;
}

export default Button;
