import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipesObject, IRecipesState } from "../types/type";

const initialState: IRecipesState = {
  recipes: {
    rows: [],
    count: 0
  },
  error: {}
};

// Slice
export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    hasError: (state, action: PayloadAction<object>) => {
      state.error = action.payload;
    },
    recipesSuccess: (state, action: PayloadAction<IRecipesObject>) => {
      state.recipes = {
        rows: [...state.recipes.rows, ...action.payload.rows],
        count: action.payload.count
      };
    },
  }
});

export const { hasError, recipesSuccess } = recipesSlice.actions

export default recipesSlice.reducer
