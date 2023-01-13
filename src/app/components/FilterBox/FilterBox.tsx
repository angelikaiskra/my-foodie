import React from "react";
import classes from "./FilterBox.module.scss";

interface IFilterBoxProps {
  title: string,
  imageUrl: string,
  onFilterBoxClicked: () => void,
}

function FilterBox({title, imageUrl, onFilterBoxClicked}: IFilterBoxProps): JSX.Element {
  return (
    <div className={classes.filterBox} onClick={() => onFilterBoxClicked()}>
      <img className={classes.bg} src={imageUrl} alt={title} />
      <div className={classes.overlay} />
      <span className={classes.title}>{title}</span>
    </div>
  );
}

export default FilterBox;
