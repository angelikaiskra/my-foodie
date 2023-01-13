import React from 'react';
import classes from './SearchBar.module.scss';
import Icon from '../Icon/Icon';

interface ISearchBarProps {
  val: string,
  setVal: (val: string) => void,
}

function SearchBar({val, setVal}: ISearchBarProps): JSX.Element {
  return (
    <div className={classes.searchBar}>
      <Icon name={'search'} width={18} height={18} />
      <input type={'text'} placeholder={'Szukaj po nazwie przepisu'}
             value={val} onChange={(e) => setVal(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
