const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
<<<<<<< HEAD
    id: {
=======
    userID: {
>>>>>>> be463e1f274ae6926d3c1311b3a186c833bb6bf7
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
<<<<<<< HEAD
    name: {
=======
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
>>>>>>> be463e1f274ae6926d3c1311b3a186c833bb6bf7
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
<<<<<<< HEAD
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
=======
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
      type: DataTypes.Date,
      allowNull: false,

    },

    lastLogin: {
      type: DataTypes.Date,
      allowNull: false,

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

>>>>>>> be463e1f274ae6926d3c1311b3a186c833bb6bf7
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
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

<<<<<<< HEAD
module.exports = User;
=======
module.exports = User;
>>>>>>> be463e1f274ae6926d3c1311b3a186c833bb6bf7
