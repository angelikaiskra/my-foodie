import React from "react";
import classes from "./FilterBox.module.scss";

interface IFilterBoxProps {
  title: string,
  imageUrl: string,
}

function FilterBox({title, imageUrl}: IFilterBoxProps): JSX.Element {
  return (
    <div className={classes.filterBox}>
      <img className={classes.bg} src={imageUrl} alt={title} />
      <div className={classes.overlay} />
      <span className={classes.title}>{title}</span>
    </div>
  );
}

export default FilterBox;
