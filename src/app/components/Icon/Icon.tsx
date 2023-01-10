import React from 'react';

import classes from './Icon.module.scss';

interface IIconProps {
  name: string;
  width?: number;
  height?: number;
}

function Icon({ name, width = 30, height = 30 }: IIconProps): JSX.Element {
  const style = {
    width: width,
    height: height,
  };

  return (
    <span
      className={`${classes.icon} ${classes['icon--' + name]}`}
      style={style}
    />
  );
}

export default Icon;
