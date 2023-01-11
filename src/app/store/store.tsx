import { configureStore } from '@reduxjs/toolkit';

import recipesReducer from '../reducers/recipesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch
