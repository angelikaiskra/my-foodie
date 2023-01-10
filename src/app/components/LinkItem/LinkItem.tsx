import React from 'react';
import { Link } from 'react-router-dom';

import classes from './LinkItem.module.scss';
import Icon from '../Icon/Icon';

interface ILinkItemProps {
  iconName: string;
  iconProps?: object;
  url: string;
  title: string;
}

function LinkItem(props: ILinkItemProps): JSX.Element {
  return (
    <li className={classes.link}>
      <Icon name={props.iconName} {...(props.iconProps && props.iconProps)} />
      <Link to={props.url}>{props.title}</Link>
    </li>
  );
}

export default LinkItem;
