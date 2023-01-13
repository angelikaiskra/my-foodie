import express from "express";

import { RecipeService } from "../services/recipe.service";

const router = express.Router();
const recipeService = new RecipeService();

router.get("/hello", async (_req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

router.get("/recipes", (req, res) => {
  const limit = req.query.limit && typeof req.query.limit === "string" ? parseInt(req.query.limit) : 20;
  const offset = req.query.offset && typeof req.query.offset === "string" ? parseInt(req.query.offset) : 0;

  console.log(req.query);

  if (req.query.search && req.query.search !== "")
    recipeService.getRecipesByTitle(req.query.search.toString(), limit, offset)
      .then((recipes) => res.status(200).json(recipes));
  else if (req.query.type && req.query.type !== "")
    recipeService.getRecipesByType(req.query.type.toString(), limit, offset)
      .then((recipes) => res.status(200).json(recipes));
  else recipeService.getAll(limit, offset)
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
