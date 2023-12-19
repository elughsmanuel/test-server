'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('.');

class Product extends Model {}

Product.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'NAME MUST BE UNIQUE',
    },
    validate: {
      notEmpty: {
        msg: 'NAME IS REQUIRED',
      },
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'DESCRIPTION IS REQUIRED',
      },
    },
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'PRICE IS REQUIRED',
      },
    },
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'CATEGORY IS REQUIRED',
      },
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'QUANTITY IS REQUIRED',
      },
    },
  },
}, {
  sequelize,
  modelName: 'product',
  tableName: 'products',
});

module.exports = Product;
