import React from "react";

import classes from "./ShoppingList.module.scss";

import Container from "../../components/Container/Container";

function ShoppingList(): JSX.Element {

  return (
    <Container>
      <div className={classes.shoppingList}>
        <p>Shopping list screen</p>
      </div>
    </Container>
  );
}

export default ShoppingList;
