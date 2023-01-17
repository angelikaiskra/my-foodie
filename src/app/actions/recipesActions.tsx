import { Dispatch } from "@reduxjs/toolkit";
import { deleteRecipeSuccess, recipesSlice, recipeSuccess, recipesWithClearSuccess } from "../reducers/recipesSlice";
import axios from "axios";

const { recipesSuccess, hasError } = recipesSlice.actions;

export const fetchRecipes = (
  limit: number,
  offset: number,
  searchVal = "",
  type = "",
  clearArray = false
) => async (dispatch: Dispatch) => {

  try {
    const limitParam = `limit=${limit}`;
    const offsetParam = `&offset=${offset}`;
    const searchParam = searchVal !== "" ? `&search=${searchVal}` : "";
    const typeParam = type !== "" ? `&type=${type}` : "";

    await axios.get(`/api/recipes?${limitParam}${offsetParam}${searchParam}${typeParam}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (clearArray)
          dispatch(recipesWithClearSuccess(response.data));
        else
          dispatch(recipesSuccess(response.data));
      });
  } catch (e: any) {
    dispatch(hasError(e.message));
  }
};

export const fetchRecipeBySlug = (slug: string) => async (dispatch: Dispatch) => {
  try {
    await axios.get(`/api/recipe/${slug}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
          dispatch(recipeSuccess(response.data));
      });
  } catch (e: any) {
    dispatch(hasError(e.message));
  }
};

export const deleteRecipe = (id: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`/api/recipe/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        dispatch(deleteRecipeSuccess());
      })
  } catch (e: any) {
    dispatch(hasError(e.message));
  }
};
