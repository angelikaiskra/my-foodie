import { Recipe, RecipeAddModel, RecipeModel } from "../models/recipe.model";
import { Op } from "sequelize";

export class RecipeService {

  add(recipe: RecipeAddModel) {
    return Recipe.create(this._parseRecipe(recipe))
      .then(recipe => {
        return recipe;
      });
  }

  getAll(limit = 20, offset = 0) {
    return Recipe.findAndCountAll({
      limit: limit,
      offset: offset
    }).then((recipes) => {
      recipes.rows.map((recipe) => {
        this._parseRecipe(recipe);
      });

      return recipes;
    });
  }

  getRecipeBySlug(slug: string) {
    return Recipe.findOne({ where: { slug: slug } })
      .then((recipe) => {
        if (recipe)
          return this._parseRecipe(recipe);

        return {};
      });
  }

  getRecipesByTitle(title: string, limit = 20, offset = 0) {
    return Recipe.findAndCountAll({
      where: {
        title: {
          [Op.like]: `%${title}%`
        }
      },
      limit: limit,
      offset: offset
    }).then((recipes) => {
      recipes.rows.map((recipe) => {
        this._parseRecipe(recipe);
      });

      return recipes;
    });
  }

  getRecipesByType(type: string, limit = 20, offset = 0) {
    return Recipe.findAndCountAll({
      where: {
        type: {
          [Op.like]: type
        }
      },
      limit: limit,
      offset: offset
    }).then((recipes) => {
      recipes.rows.map((recipe) => {
        this._parseRecipe(recipe);
      });

      return recipes;
    });
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
