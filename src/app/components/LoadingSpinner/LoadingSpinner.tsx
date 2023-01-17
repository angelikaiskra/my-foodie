import React from "react";

import classes from "./LoadingSpinner.module.scss";

function LoadingSpinner(): JSX.Element {
  return (
    <div className={classes.loadingSpinner}>
      <div />
    </div>
  );
}

export default LoadingSpinner;
