// Importing  Sequelize constructor from library
const Sequelize = require('sequelize');

// Connection to  database
const sequelize = new Sequelize('darkins_tech_blog_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;