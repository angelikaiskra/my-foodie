import React, { useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";

import classes from "./SingleRecipe.module.scss";

import Container from "../../components/Container/Container";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchRecipeBySlug, deleteRecipe } from "../../actions/recipesActions";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Tag from "../../components/Tag/Tag";
import Button from "../../components/Button/Button";
import { ButtonTypes } from "../../types/type";

function SingleRecipe(): JSX.Element {
  const navigate = useNavigate();
  const searchParams = useParams();
  const dispatch = useAppDispatch();
  const { recipe } = useAppSelector(state => state.recipes);

  useEffect(() => {
    if (searchParams.slug && searchParams.slug !== "")
      dispatch(fetchRecipeBySlug(searchParams.slug));
  }, [])

  const renderTags = () => {
      return recipe.tags.map((tag, index) => {
        return <Tag text={tag} key={index} />
      })
  }

  const renderIngredients = () => {
    return recipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    })
  }

  const renderSteps = () => {
    return recipe.steps.map((step, index) => {
      return <li key={index}>{step}</li>
    })
  }

  const renderPhotos = () => {
    return recipe.photos.map((photo, index) => {
      return <img src={photo} alt={"Zdjęcie przepisu"} key={index} />
    })
  }

  const onDeleteClicked = () => {
    dispatch(deleteRecipe(recipe.id))
      .then(() => {
        navigate('/');
      })
  }

  return (
    <Container>
      {!recipe.id ? <LoadingSpinner /> :
        <div className={classes.singleRecipe}>
          <h1>{recipe.title}</h1>

          <section className={classes.tags}>
            {renderTags()}
          </section>

          <section className={classes.textsContainer}>
            <div className={classes.ingredients}>
              <h2>Składniki</h2>

              <ul>
                {renderIngredients()}
              </ul>
            </div>

            <div className={classes.steps}>
              <h2>Przygotowanie</h2>

              <ol>
                {renderSteps()}
              </ol>
            </div>
          </section>

          <section className={classes.photos}>
            <h2>Zdjęcia</h2>

            <div>
              {renderPhotos()}
            </div>
          </section>

          <section className={classes.actions}>
            <Button text={"Usuń przepis"} type={ButtonTypes.danger} onClick={() => onDeleteClicked()} />
          </section>
        </div>
      }
    </Container>
  );
}

export default SingleRecipe;
