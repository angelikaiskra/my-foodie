import React, { useEffect } from "react";
import { IRecipe } from "../../types/type";
import { fetchRecipes } from "../../actions/recipesActions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import classes from "./Dashboard.module.scss";

import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBox from "../../components/FilterBox/FilterBox";
import RecipeBox from "../../components/RecipeBox/RecipeBox";

function Dashboard(): JSX.Element {
  const dispatch = useAppDispatch();
  const { recipes, isLoading } = useAppSelector(state => state.recipes)

  useEffect(() => {
       dispatch(fetchRecipes());
     }, [dispatch]);

  const renderedRecipes = () => {
    if (isLoading) {
      return <div>Loading...</div>
    } else {
      return recipes.map((recipe: IRecipe) => (
        <RecipeBox key={recipe.id}
                   title={recipe.title}
                   imageUrl={recipe.thumbnail}
                   prepTime={recipe.prepTime} link={`/przepis/${recipe.slug}`}
        />
      ))
    }
  }

  return (
    <Container>
      <div className={classes.dashboard}>
        <SearchBar />

        <section className={classes.filterBoxes}>
          <FilterBox title={"Śniadanie"} imageUrl={"http://localhost:3001/assets/img/breakfast.png"} />
          <FilterBox title={"Obiad"} imageUrl={"http://localhost:3001/assets/img/mainDish.png"} />
          <FilterBox title={"Lunch"} imageUrl={"http://localhost:3001/assets/img/lunch.png"} />
          <FilterBox title={"Kolacja"} imageUrl={"http://localhost:3001/assets/img/dinner.png"} />
        </section>

        <section>
          <h2>Wszystkie przepisy</h2>
          <div className={classes.recipes}>
            {renderedRecipes()}
          </div>
        </section>


      </div>
    </Container>
  );
}

export default Dashboard;
