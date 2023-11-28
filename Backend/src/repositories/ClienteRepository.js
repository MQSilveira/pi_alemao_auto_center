const Cliente = require('../models/Cliente')
const { Sequelize } = require('sequelize');

class ClienteRepository {
    async GetCliente() {
        try {
            const cliente = await Cliente.findAll({
                attributes: ['nome_completo', 'contato', 'endereco']
            })
            if (cliente.length === 0) {
                return null
            }
            return cliente
        
        } catch (err) {
            throw err
        }
    }

    async GetClienteById(id, transaction) {
        try {
            const cliente = await Cliente.findOne({
                where: {
                    id: id
                }
            },
            { transaction }
            )

            if (!cliente) {
                return null

            } else {
                const { nome_completo, contato, endereco } = cliente.dataValues
                return { nome_completo, contato, endereco }
            }
        } catch (err) {
            throw err
        }
    }

    async FindClienteById(id, transaction) {
        try {
            const cliente = await Cliente.findOne({
                where: {
                    id: id
                }
            },
            { transaction }
            )

            if (!cliente) {
                return null
            
            } else {
                const id = cliente.dataValues.id
                return id
            }

        } catch (err) {
            throw err
        }
    }

    async CreateCliente(data, transaction) {
        try {
            Cliente.create(
                {
                    nome_completo: data.nome_completo,
                    contato: data.contato,
                    endereco: data.endereco
                },
                { transaction }
            )
            return null

        } catch (err) {
            throw err
        }
    }

    async UpdateCliente(id, data, transaction) {
        try {
            const updateFields = {
                nome_completo: data.nome_completo,
                contato: data.contato,
                endereco: data.endereco,
                updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
            }

            const cliente = await Cliente.update(
                updateFields,{ 
                    where: { 
                        id: id 
                    } 
                },
                { transaction }
            )
            return cliente

        } catch (err) {
            throw err
        }
    }

    async DeleteCliente(id, transaction) {
        try {
            const rowAffected = await Cliente.destroy(
                {
                    where: { id: id }
                },
                { transaction }
            )

            if (rowAffected === 0) {
                return null
            }
            return rowAffected

        } catch (err) {
            throw err
        }
    }

}

module.exports = ClienteRepository
