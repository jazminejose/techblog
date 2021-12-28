const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')

class Comment extends Model { }
Comment.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'comment'  })

module.exports = Comment