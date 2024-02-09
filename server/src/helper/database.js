const { Sequelize } = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

// Create a new instance of Sequelize with database connection details
const sequelize = new Sequelize(
  process.env.DATABASE_NAME, 
  process.env.DATABASE_USERNAME, 
  process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE // Change this to match your database (e.g., "postgres", "sqlite", etc.)
  });

// Define your models
// const USER = require('../models/user.model');
// const Post = require('./models/Post');

// Initialize your models with Sequelize and the database connection
// USER.init(sequelize);
// Post.init(sequelize);

// Set up associations between models if needed
// User.hasMany(Post);
// Post.belongsTo(User);

module.exports = sequelize;