import React, { useEffect, useState } from "react";
import { IRecipe } from "../../types/type";
import { fetchRecipes } from "../../actions/recipesActions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import classes from "./Dashboard.module.scss";

import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBox from "../../components/FilterBox/FilterBox";
import RecipeBox from "../../components/RecipeBox/RecipeBox";

const limit = 20;

function Dashboard(): JSX.Element {
  const dispatch = useAppDispatch();
  const { recipes } = useAppSelector(state => state.recipes);

  const [offset, setOffset] = useState(0);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes(limit, offset, searchVal));
  }, []);

  useEffect(() => {
    if (offset === 0) return;

    // return if already loaded all recipes
    if (recipes.count !== 0 && recipes.count < offset) return;

    console.log("load more recipes, offset " + offset);
    dispatch(fetchRecipes(limit, offset, searchVal));
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [recipes]);

  useEffect(() => {
    dispatch(fetchRecipes(limit, offset, searchVal, true));
    setOffset(0);
  }, [searchVal]);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollOffset = 300;
    const scrollHeight = document.documentElement.scrollHeight - scrollOffset;

    if (scrollTop + clientHeight >= scrollHeight)
      setOffset(offset + limit);
  };

  const renderedRecipes = () => {
    return recipes.rows.map((recipe: IRecipe) => (
      <RecipeBox key={recipe.id}
                 title={recipe.title}
                 imageUrl={recipe.thumbnail}
                 prepTime={recipe.prepTime} link={`/przepis/${recipe.slug}`}
      />
    ));
  };

  const sectionTitle = searchVal !== '' ? `Przepisy: ${searchVal}` : "Wszystkie przepisy"

  return (
    <Container>
      <div className={classes.dashboard}>
        <SearchBar val={searchVal} setVal={(val) => setSearchVal(val)} />

        <section className={classes.filterBoxes}>
          <FilterBox title={"Śniadanie"} imageUrl={"/img/breakfast.png"} />
          <FilterBox title={"Obiad"} imageUrl={"/img/mainDish.png"} />
          <FilterBox title={"Lunch"} imageUrl={"/img/lunch.png"} />
          <FilterBox title={"Kolacja"} imageUrl={"/img/dinner.png"} />
        </section>

        <section>
          <h2>{sectionTitle}</h2>
          <div className={classes.recipes}>
            {renderedRecipes()}
          </div>
        </section>


      </div>
    </Container>
  );
}

export default Dashboard;
