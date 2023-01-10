import React from 'react';
import classes from './SearchBar.module.scss';
import Icon from '../Icon/Icon';

function SearchBar(): JSX.Element {
  return (
    <div className={classes.searchBar}>
      <Icon name={'search'} width={18} height={18} />
      <input type={'text'} placeholder={'Szukaj po nazwie przepisu'} />
    </div>
  );
}

export default SearchBar;
