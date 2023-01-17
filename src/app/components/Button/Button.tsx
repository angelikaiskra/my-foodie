import React from "react";
import { ButtonTypes } from "../../types/components";

import classes from "./Button.module.scss";

interface IButtonProps {
  text: string;
  onClick: () => void,
  type?: ButtonTypes;
}

function Button({ text, onClick, type = ButtonTypes.primary }: IButtonProps): JSX.Element {
  return <button
    className={`${classes.button} ${classes["button--" + type]}`}
    onClick={() => onClick()}>
    {text}
  </button>;
}

export default Button;
