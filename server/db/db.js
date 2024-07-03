/* const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Remplacez par votre utilisateur PostgreSQL
  host: 'localhost',
  database: 'online_library', // Nom de la base de données que vous avez créée
  password: '-+', // Mot de passe de votre utilisateur PostgreSQL
  port: 5432,
});

module.exports = pool; */

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('online_library', 'postgres', '-+', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;

