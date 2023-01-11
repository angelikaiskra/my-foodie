import React from "react";

import classes from "./AddRecipe.module.scss";

import Container from "../../components/Container/Container";

function AddRecipe(): JSX.Element {

  return (
    <Container>
      <div className={classes.addRecipe}>
        <p>Add recipe screen</p>
      </div>
    </Container>
  );
}

export default AddRecipe;
