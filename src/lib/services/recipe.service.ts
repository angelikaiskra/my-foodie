import { Recipe, RecipeAddModel, RecipeModel } from "../models/recipe.model";
import { Op } from "sequelize";

export class RecipeService {

  add(recipe: RecipeAddModel) {
    return Recipe.create(this._parseRecipe(recipe))
      .then(recipe => {return recipe});
  }

  getAll() {
    return Recipe.findAll().then((recipes) => {
      recipes.map((recipe) => {
        this._parseRecipe(recipe)
      })

      return recipes;
    })
  }

  getRecipeBySlug(slug: string) {
    return Recipe.findOne({ where: { slug: slug } })
      .then((recipe) => {
        if (recipe)
          return this._parseRecipe(recipe);

        return {};
      })
  }

  getRecipesByTitle(title: string) {
    return Recipe.findAll({ where: { title: { [Op.like]: `%${title}%` } } })
      .then((recipes) => {
        recipes.map((recipe) => {
          this._parseRecipe(recipe)
        })
      })
  }

  _parseRecipe(recipe: RecipeModel | RecipeAddModel) {
    if (recipe.tags && typeof recipe.tags === "string")
      recipe.tags = recipe.tags.split("|");

    if (recipe.ingredients && typeof recipe.ingredients === "string")
      recipe.ingredients = recipe.ingredients.split("|");

    if (recipe.steps && typeof recipe.steps === "string")
      recipe.steps = recipe.steps.split("|");

    if (recipe.photos && typeof recipe.photos === "string")
      recipe.photos = recipe.photos.split("|");

    return recipe;
  }

}
