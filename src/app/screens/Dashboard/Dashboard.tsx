import React, { useEffect, useState } from "react";
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

  // const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const [searchVal, setSearchVal] = useState("")

  useEffect(() => {
       dispatch(fetchRecipes(page));
     }, [dispatch]);

  useEffect(() => {
    console.log("load more recipes, page ", page)
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [recipes])

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    const offset = 300
    const scrollHeight = document.documentElement.scrollHeight - offset

    if (scrollTop + clientHeight >= scrollHeight)
      setPage(page + 1)
  }

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
        <SearchBar val={searchVal} setVal={(val) => setSearchVal(val)} />

        <section className={classes.filterBoxes}>
          <FilterBox title={"Śniadanie"} imageUrl={"/img/breakfast.png"} />
          <FilterBox title={"Obiad"} imageUrl={"/img/mainDish.png"} />
          <FilterBox title={"Lunch"} imageUrl={"/img/lunch.png"} />
          <FilterBox title={"Kolacja"} imageUrl={"/img/dinner.png"} />
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
