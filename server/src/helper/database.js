const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sample", "shakib", "password", {
  host: "localhost",
  dialect: "mysql", // Change this to match your database (e.g., "postgres", "sqlite", etc.)
});

module.exports = sequelize;