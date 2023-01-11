import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '../screens/Dashboard/Dashboard';
import AddRecipe from "../screens/AddRecipe/AddRecipe";
import SingleRecipe from "../screens/SingleRecipe/SingleRecipe";
import ShoppingList from "../screens/ShoppingList/ShoppingList";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/nowy-przepis',
    element: <AddRecipe />,
  },
  {
    path: '/przepis/:slug',
    element: <SingleRecipe />,
  },
  {
    path: '/lista-zakupow',
    element: <ShoppingList />,
  },
]);

export default router;
