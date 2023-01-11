import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe, IRecipesState } from "../types/type";

const initialState: IRecipesState = {
  recipes: [],
  isLoading: false,
  error: {}
};

// Slice
export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    startLoading: state => {
      state.isLoading = true;
    },
    hasError: (state, action: PayloadAction<object>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    recipesSuccess: (state, action: PayloadAction<IRecipe[]>) => {
      state.recipes = action.payload;
      state.isLoading = false;
    }
  }
});

export const { startLoading, hasError, recipesSuccess } = recipesSlice.actions

export default recipesSlice.reducer
