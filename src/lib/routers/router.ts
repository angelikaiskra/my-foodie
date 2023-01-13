import express from "express";

import { RecipeService } from "../services/recipe.service";

const router = express.Router();
const recipeService = new RecipeService();

router.get("/hello", async (_req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

router.get("/recipes", (req, res) => {
  if (req.query.search && req.query.search !== "")
    recipeService.getRecipesByTitle(req.query.search.toString())
      .then((recipes) => res.status(200).json(recipes));

  recipeService.getAll()
    .then((recipes) => res.status(200).json(recipes));
});

router.get("/recipe/:slug", (req, res) => {
  recipeService.getRecipeBySlug(req.params.slug)
    .then((recipe) => res.status(200).json(recipe));
});

router.post("/recipe/add", (req, res) => {
  recipeService.add(req.body)
    .then((recipe) => res.status(200).json(recipe));
});

export default router;
