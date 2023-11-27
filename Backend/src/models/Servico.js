const { DataTypes } = require('sequelize')

const db = require('../database/db')
const Administrador = require('./Administrador')
const Cliente = require('./Cliente')


const Servico = db.define('servico', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    data_hora: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'id'
        }
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    descricao_servico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    administrador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Administrador,
            key: 'id'
        }
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
    tableName: 'servico',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    dialectOptions: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        useUTC: false
    },
    timezone: '-03:00'
})

Servico.belongsTo(Cliente, { foreignKey: 'cliente_id' })
Servico.belongsTo(Administrador, { foreignKey: 'administrador_id' })

module.exports = Servico
