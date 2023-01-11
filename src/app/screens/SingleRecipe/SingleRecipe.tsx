import React from "react";

import classes from "./SingleRecipe.module.scss";

import Container from "../../components/Container/Container";

function SingleRecipe(): JSX.Element {

  return (
    <Container>
      <div className={classes.singleRecipe}>
        <p>Single recipe screen</p>
      </div>
    </Container>
  );
}

export default SingleRecipe;
