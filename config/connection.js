// Importing  base Sequelize class to create a new connection to the database
const Sequelize = require('sequelize');

//Loading enviornment variables
require('dotenv').config();

// Connection to  database
const sequelize = new Sequelize('darkins_tech_blog_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;