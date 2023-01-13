import { Dispatch } from "@reduxjs/toolkit";
import { recipesSlice } from "../reducers/recipesSlice";
import axios from "axios";

const { recipesSuccess, startLoading, hasError} = recipesSlice.actions;

export const fetchRecipes = (page: number) => async (dispatch: Dispatch) => {
    dispatch(startLoading());
  try {
    await axios.get(`/api/recipes?page=${page}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => dispatch(recipesSuccess(response.data)));
  } catch (e: any) {
       dispatch(hasError(e.message))
  }
};
