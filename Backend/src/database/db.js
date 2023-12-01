const { Sequelize } = require('sequelize')
const { development } = require('../config')

const { username, password, database, host, dialect, timezone } = development

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    timezone,
    define: {
        underscored: true,
        timestamps: false
    }
})

sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao banco de dados')
    })
    .catch(err => {
        console.log(err)
    })

module.exports = sequelize