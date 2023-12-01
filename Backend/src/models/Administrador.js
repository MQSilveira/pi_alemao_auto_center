const { DataTypes, Sequelize } = require('sequelize')
const db = require('../database/db')

const Administrador = db.define('administrador', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_completo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contato: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.fn('NOW')
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
        
    }
}, {
    tableName: 'administrador'
})



module.exports = Administrador
