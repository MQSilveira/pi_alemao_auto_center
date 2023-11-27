const { DataTypes } = require('sequelize')
const db = require('../database/db')

const Cliente = db.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_completo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contato: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
}, {
    tableName: 'cliente'
})

module.exports = Cliente

