import React from 'react';

import classes from './Menu.module.scss';
import logo from '../../assets/img/logo.svg';
import LinkItem from '../LinkItem/LinkItem';

function Menu(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <header className={`${classes.menu} ${isOpen ? classes.open : ''}`}>
      <div className={classes.logo}>
        <img src={logo} alt={'My Foodie'} />
      </div>

      <div className={classes.burger} onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={classes.divider} />

      <nav className={classes.links}>
        <LinkItem
          iconName={'recipes'}
          iconProps={{ height: 35 }}
          url={'/'}
          title={'Przepisy'}
        />

        <LinkItem
          iconName={'new'}
          url={'/przepis/nowy'}
          title={'Nowy przepis'}
        />

        <LinkItem
          iconName={'cart'}
          iconProps={{ height: 25 }}
          url={'/lista-zakupow'}
          title={'Lista zakupów'}
        />
      </nav>
    </header>
  );
}

export default Menu;
