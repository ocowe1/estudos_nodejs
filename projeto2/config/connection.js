const Sequelize = require('sequelize')
const connection = new Sequelize('projeto2', 'root', 'secret', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
