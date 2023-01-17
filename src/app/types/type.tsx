export interface IRecipe {
  id: number,
  title: string,
  thumbnail: string,
  prepTime: number,
  slug: string,
  type: string,
  tags: string[],
  ingredients: string[],
  steps: string[],
  photos: string[],
}

export interface IRecipesObject {
    rows: IRecipe[],
    count: number
}

export interface IRecipesState {
  recipes: IRecipesObject,
  recipe: IRecipe | Record<string, never>,
  error: object
}

export enum ButtonTypes {
  primary = "primary",
  danger = "danger"
}
