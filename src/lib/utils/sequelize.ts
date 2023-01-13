import { Sequelize } from 'sequelize';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

const HOST: string = DB_HOST ?? 'localhost'
const PORT: number = DB_PORT as unknown as number ?? 3306
const DATABASE: string = DB_DATABASE ?? 'my_foodie'
const USER: string = DB_USER ?? 'root'
const PASSWORD: string = DB_PASSWORD ?? ''

export const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mysql",
  host: HOST,
  port: PORT,
});

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch((e) => {
  console.error('Unable to connect to the database:', e);
})
