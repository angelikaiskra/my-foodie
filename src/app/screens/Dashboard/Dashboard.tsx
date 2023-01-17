import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../../actions/recipesActions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import classes from "./Dashboard.module.scss";

import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBox from "../../components/FilterBox/FilterBox";
import RecipeBox from "../../components/RecipeBox/RecipeBox";
import Title from "../../components/Title/Title";
import { IRecipe } from "../../types/recipes";
import { TitleTypes } from "../../types/components";

const limitRecipes = 20;
const scrollOffset = 300;

function Dashboard(): JSX.Element {
  const dispatch = useAppDispatch();
  const { recipes } = useAppSelector(state => state.recipes);

  const [offset, setOffset] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  const [recipeType, setRecipeType] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes(limitRecipes));
  }, []);

  useEffect(() => {
    if (offset === 0) return;

    // return if already loaded all recipes
    if (recipes.count !== 0 && recipes.count <= offset) return;

    console.log("load more recipes, offset " + offset);
    dispatch(fetchRecipes(limitRecipes, offset, searchVal, recipeType, true));
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [recipes]);

  useEffect(() => {
    if (searchVal === "") return;

    setRecipeType("");
    setOffset(0);
    dispatch(fetchRecipes(limitRecipes, 0, searchVal));
  }, [searchVal]);

  const onScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const calculatedScrollHeight = scrollHeight - scrollOffset;

    if (scrollTop + clientHeight >= calculatedScrollHeight)
      setOffset(offset + limitRecipes);
  };

  const onFilterBoxClicked = (type: string) => {
    setRecipeType(type);
    setSearchVal("");
    setOffset(0);
    dispatch(fetchRecipes(limitRecipes, 0, "", type));
  };

  const clearFilters = () => {
    setRecipeType("");
    setSearchVal("");
    setOffset(0);
    dispatch(fetchRecipes(limitRecipes));
  };

  const getRecipes = () => {
    return recipes.rows.map((recipe: IRecipe) => (
      <RecipeBox key={recipe.id}
                 title={recipe.title}
                 imageUrl={recipe.thumbnail}
                 prepTime={recipe.prepTime} link={`/przepis/${recipe.slug}`}
      />
    ));
  };

  const getSectionTitle = () => {
    if (searchVal !== "")
      return `Przepisy dla frazy: ${searchVal}`;

    if (recipeType !== "")
      return `Przepisy według typu: ${recipeType}`;

    return "Wszystkie przepisy";
  };

  const getClearIcon = () => {
    if (recipeType !== "" || searchVal !== "")
      return <span className={classes.clearIcon} onClick={() => clearFilters()} />;
    return null;
  };

  return (
    <Container>
      <div className={classes.dashboard}>
        <SearchBar val={searchVal} setVal={(val) => setSearchVal(val)} />

        <section className={classes.filterBoxes}>
          <FilterBox title={"Śniadanie"} imageUrl={"/img/breakfast.png"}
                     onFilterBoxClicked={() => onFilterBoxClicked("sniadanie")} />
          <FilterBox title={"Obiad"} imageUrl={"/img/mainDish.png"}
                     onFilterBoxClicked={() => onFilterBoxClicked("obiad")} />
          <FilterBox title={"Lunch"} imageUrl={"/img/lunch.png"}
                     onFilterBoxClicked={() => onFilterBoxClicked("lunch")} />
          <FilterBox title={"Kolacja"} imageUrl={"/img/dinner.png"}
                     onFilterBoxClicked={() => onFilterBoxClicked("kolacja")} />
        </section>

        <section>
          <Title type={TitleTypes.large}>{getSectionTitle()} {getClearIcon()}</Title>
          <div className={classes.recipes}>
            {getRecipes()}
          </div>
        </section>

      </div>
    </Container>
  );
}

export default Dashboard;
