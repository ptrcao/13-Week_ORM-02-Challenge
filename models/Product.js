// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
      isDecimal: true,
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 10,
      validate: {
      isNumeric: true,
      },
    },
    // This column will store a reference of the `id` of the `Category` that subsumes this product
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `category` model, which we set in `Category.js` as its 
        model: 'category',
        key: 'id',
      },
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
