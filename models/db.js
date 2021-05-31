import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'node_db',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);