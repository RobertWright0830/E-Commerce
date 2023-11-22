// Define the Product model
const { Model, DataTypes } = require("sequelize");

// Import the database connection from config.js
const sequelize = require("../config/connection");

// Initialize the Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for Product model
Product.init(
  {
    // Define an id column
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Define a product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define a price column
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // Define a stock column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // Define a category_id column
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    // Associate the model with the Sequelize connection
    sequelize,
    // Disable timestamps (createdAt and updatedAt columns)
    timestamps: false,
    // Disable pluralization of the table names
    freezeTableName: true,
    // Use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // Make the model name lowercase in the database
    modelName: "product",
  }
);

// Export the Product model
module.exports = Product;