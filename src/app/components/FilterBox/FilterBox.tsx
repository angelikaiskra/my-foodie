import React from 'react';
import classes from './FilterBox.module.scss';

interface IFilterBoxProps {
  title: string;
  image: string;
}

function FilterBox({ title, image }: IFilterBoxProps): JSX.Element {
  return (
    <div className={classes.filterBox}>
      <div className={`${classes.bg} ${classes['bg--' + image]}`} />
      <div className={classes.overlay} />
      <span className={classes.title}>{title}</span>
    </div>
  );
}

export default FilterBox;
