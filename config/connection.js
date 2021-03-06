// Importing  base Sequelize class to create a new connection to the database
const Sequelize = require('sequelize');

//Loading enviornment variables
require('dotenv').config();

// Connection to JAWSDB database via Heroku
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;