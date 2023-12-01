const { Sequelize } = require('sequelize')
const { development } = require('../config')

const db = new Sequelize(development)

db.sync()
    .then(() => {
        
        console.log('Conectado ao banco de dados')
    })
    .catch(err => {
        console.log(err)
    })

module.exports = db
