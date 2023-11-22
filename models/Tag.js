// Import necessary components from Sequelize
const { Model, DataTypes } = require("sequelize");

// import the sequelize connection
const sequelize = require("../config/connection.js");

// define the Tag model
class Tag extends Model {}

// initialize the Tag model
Tag.init(
  {
    // Primary key 'id' with auto-increment and disallowing null values
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Non-null 'tag_name' attribute with STRING type
    tag_name: {
      type: DataTypes.STRING,
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
    modelName: "tag",
  }
);

// export the Tag model
module.exports = Tag;
