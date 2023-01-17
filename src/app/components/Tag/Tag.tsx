import React from 'react';

import classes from './Tag.module.scss';

interface ITagProps {
  text: string;
}

function Tag({text}: ITagProps): JSX.Element {
  return (
    <div className={classes.tag}>{text}</div>
  );
}

export default Tag;
