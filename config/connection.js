require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/techblog_db')

module.exports = sequelize