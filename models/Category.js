// Import necessary components from Sequelize
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

// Define the Category class that extends Sequelize's Model class
class Category extends Model {}

// Initialize the Category model with its attributes and configurations
Category.init(
  {
    // Primary key 'id' with auto-increment and disallowing null values
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Non-null 'category_name' attribute with STRING type
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "category",
  }
);

// Export the Category model
module.exports = Category;
