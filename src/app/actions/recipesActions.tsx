import { Dispatch } from "@reduxjs/toolkit";
import { recipesSlice } from "../reducers/recipesSlice";
import axios from "axios";

const { recipesSuccess, startLoading, hasError} = recipesSlice.actions;

export const fetchRecipes = () => async (dispatch: Dispatch) => {
    dispatch(startLoading());
  try {
    await axios.get("/api/recipes")
      .then(response => dispatch(recipesSuccess(response.data)));
  } catch (e: any) {
       dispatch(hasError(e.message))
  }
};
