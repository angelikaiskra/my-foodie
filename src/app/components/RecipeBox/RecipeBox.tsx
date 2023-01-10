import React from 'react';
import classes from './RecipeBox.module.scss';
import Icon from '../Icon/Icon';

interface IRecipeBoxProps {
  title: string;
  imageUrl: string;
  prepTime: number;
  link: string;
}

function RecipeBox({
  title,
  imageUrl,
  prepTime,
  link,
}: IRecipeBoxProps): JSX.Element {
  return (
    <a href={link} className={classes.recipeBox}>
      <img src={imageUrl} alt={'Zdjęcie przepisu'} />
      <div className={classes.info}>
        <span className={classes.title}>{title}</span>
        <span className={classes.time}>
          <Icon name={'time'} /> {prepTime} min
        </span>
      </div>
    </a>
  );
}

export default RecipeBox;
