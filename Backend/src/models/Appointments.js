const { DataTypes } = require('sequelize')

const db = require('../database/db')

const Cliente = require('./Cliente')
const Adm = require('./Administrador')
const Servico = require('./Servico')

const Appointments = db.define('appointments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'id'
        }
    },
    id_adm: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Adm,
            key: 'id'
        }
    },
    id_servico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Servico,
            key: 'id'
        }
    },
    is_finished: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    created_at: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        field: 'updated_at',
        type: DataTypes.DATE
    }
}, {})

Appointments.belongsTo(Cliente, { foreignKey: 'id_cliente' })
Cliente.hasMany(Appointments, { foreignKey: 'id_cliente' })

Appointments.belongsTo(Adm, { foreignKey: 'id_adm' })
Adm.hasMany(Appointments, { foreignKey: 'id_adm' })

Appointments.belongsTo(Servico, { foreignKey: 'id_servico' })
Servico.hasMany(Appointments, { foreignKey: 'id_servico' })

module.exports = Appointments
