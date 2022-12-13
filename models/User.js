const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
}

User.init(
  {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
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
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10],
      },
    },
    registeredAt: {
      type: DataTypes.DATE,
      allowNull: false,

    },

    lastLogin: {
      type: DataTypes.DATE,

    },
    intro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strengths: {
      type: DataTypes.STRING,
      allowNull: false,
      //Choices - if we put an array here, can this be multi-select?//
    },
  },

  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.passwordHash = await bcrypt.hash(newUserData.passwordHash, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.passwordHash = await bcrypt.hash(updatedUserData.passwordHash, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);


module.exports = User;
