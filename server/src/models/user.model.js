const { DataTypes } = require("sequelize");
const sequelize = require("../helper/database");
const { ValidateUser } = require('../validations/user.validate');

const USER = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('ADMIN', 'USER'), // Define an ENUM for roles
    allowNull: false,
  },
},
{
    hooks: {
      beforeValidate: (user, options) => {
        const { error } = ValidateUser(user.toJSON());
        if (error) {
          throw new Error(error.details[0].message);
        }
      },
    },
});

module.exports = USER;