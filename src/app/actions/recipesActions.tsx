import { Dispatch } from "@reduxjs/toolkit";
import { recipesSlice } from "../reducers/recipesSlice";
import axios from "axios";

const { recipesSuccess, hasError} = recipesSlice.actions;

export const fetchRecipes = (limit: number, offset: number) => async (dispatch: Dispatch) => {
  try {
    await axios.get(`/api/recipes?limit=${limit}&offset=${offset}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => dispatch(recipesSuccess(response.data)));
  } catch (e: any) {
       dispatch(hasError(e.message))
  }
};

