import React, { ReactNode } from 'react';

import classes from './Container.module.scss';
import Menu from '../Menu/Menu';

interface IContainerProps {
  children: ReactNode;
}

function Container({ children }: IContainerProps): JSX.Element {
  return (
    <div className={classes.container}>
      <Menu />

      <div className={classes.content}>
        <div className={classes.wrapper}>{children}</div>
      </div>
    </div>
  );
}

export default Container;
