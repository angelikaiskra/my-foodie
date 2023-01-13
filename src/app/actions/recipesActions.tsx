import { Dispatch } from "@reduxjs/toolkit";
import { recipesSlice, recipesWithClearSuccess } from "../reducers/recipesSlice";
import axios from "axios";

const { recipesSuccess, hasError } = recipesSlice.actions;

export const fetchRecipes = (limit: number, offset: number, searchVal = "", type = "", clearArray = false) => async (dispatch: Dispatch) => {
  try {
    const searchParam = searchVal !== "" ? `&search=${searchVal}` : "";
    const typeParam = type !== "" ? `&type=${type}` : "";
    await axios.get(`/api/recipes?limit=${limit}&offset=${offset}${searchParam}${typeParam}`, {
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
