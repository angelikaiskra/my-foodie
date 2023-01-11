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

export interface IRecipesState {
  recipes: IRecipe[],
  isLoading: boolean,
  error: object
}
