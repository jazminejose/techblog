const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')

class User extends Model { }
User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'user' })

module.exports = User