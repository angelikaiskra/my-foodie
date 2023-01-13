import * as Sequelize from 'sequelize'
import { sequelize } from '../utils/sequelize'

export interface RecipeAddModel {
  id?: number,
  title: string,
  thumbnail: string,
  prepTime: number,
  slug: string,
  type: "śniadanie" | "lunch" | "obiad" | "kolacja",
  tags?: string | string[],
  ingredients: string | string[],
  steps: string | string[],
  photos?: string | string[],
}

export interface RecipeModel extends Sequelize.Model<RecipeModel, RecipeAddModel> {
  id: number,
  title: string,
  thumbnail: string,
  prepTime: number,
  slug: string,
  type: "śniadanie" | "lunch" | "obiad" | "kolacja",
  tags?: string | string[],
  ingredients: string | string[],
  steps: string | string[],
  photos?: string | string[],
}

export const Recipe = sequelize.define<RecipeModel, RecipeAddModel>('recipe', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
  prepTime: Sequelize.INTEGER,
  slug: Sequelize.STRING,
  type: Sequelize.ENUM('śniadanie', 'obiad', 'lunch', 'kolacja'),
  tags: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ingredients: Sequelize.STRING,
  steps: Sequelize.STRING,
  photos: {
    type: Sequelize.STRING,
    allowNull: true
  },
})
