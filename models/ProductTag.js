// Import necessary components from Sequelize
const { Model, DataTypes } = require('sequelize');

// import the sequelize connection
const sequelize = require('../config/connection');

// define the ProductTag model
class ProductTag extends Model {}

// initialize the ProductTag model
ProductTag.init(
  {
    // Primary key 'id' with auto-increment and disallowing null values
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  // Non-null 'product_id' attribute with INTEGER type
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id',
    },
  },
  // Non-null 'tag_id' attribute with INTEGER type
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tag',
      key: 'id',
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
    modelName: 'product_tag',
  }
);

// export the ProductTag model
module.exports = ProductTag;
