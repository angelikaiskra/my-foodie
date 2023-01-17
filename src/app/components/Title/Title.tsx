import React, { ReactNode } from "react";
import { TitleTypes } from "../../types/components";

import classes from "./Title.module.scss";

interface ITitleProps {
  children: ReactNode;
  type?: TitleTypes
}

function Title({ children, type = TitleTypes.medium }: ITitleProps): JSX.Element {
  if (type === TitleTypes.large)
    return <h1 className={`${classes.title} ${classes.titleH1}`}>{children}</h1>;
  else
    return <h2 className={`${classes.title} ${classes.titleH2}`}>{children}</h2>;
}

export default Title;
