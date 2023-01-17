import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe, IRecipesObject, IRecipesState } from "../types/type";

const initialState: IRecipesState = {
  recipes: {
    rows: [],
    count: 0
  },
  recipe: {},
  error: {}
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    hasError: (state, action: PayloadAction<object>) => {
      state.error = { ...action.payload };
    },
    recipesSuccess: (state, action: PayloadAction<IRecipesObject>) => {
      state.recipes = {
        rows: [...state.recipes.rows, ...action.payload.rows],
        count: action.payload.count
      };
    },
    recipesWithClearSuccess: (state, action: PayloadAction<IRecipesObject>) => {
      state.recipes = { ...action.payload };
    },
    recipeSuccess: (state, action: PayloadAction<IRecipe>) => {
      state.recipe = { ...action.payload };
    },
    deleteRecipeSuccess: (state) => {
      state.recipe = {};
    }
  }
});

export const {
  hasError,
  recipesSuccess,
  recipeSuccess,
  recipesWithClearSuccess,
  deleteRecipeSuccess
} = recipesSlice.actions;

export default recipesSlice.reducer;
