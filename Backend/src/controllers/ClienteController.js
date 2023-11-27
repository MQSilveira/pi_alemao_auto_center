const ClienteService = require('../services/ClienteService')
const config = require('../config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const service = new ClienteService()

class ClienteController {
    async GetCliente(_, res) {
        try {
            const cliente = await service.GetCliente()
            if (cliente === null) {
                return res.status(404).json({ message: 'Não há clientes cadastrados!' })
            }

            res.status(200).json({ data: cliente })

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async GetClienteById(req, res) {
        try {
            const cliente = await service.GetClienteById(req.params.id)
            if (cliente === null) {
                return res.status(404).json({ message: 'Cliente não encontrado!' })
            }

            res.status(200).json({ data: cliente })

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async CreateCliente(req, res) {
        try {
            if (Object.keys(req.body).length === 0) {
                return res.status(400).json({ message: 'É necessário informar os dados do cliente!' })
            } else if (!req.body.nome_completo) {
                return res.status(400).json({ message: 'Nome é obrigatório!' })
            } else if (!req.body.contato) {
                return res.status(400).json({ message: 'Contato é obrigatório!' })
            } else if (!req.body.endereco) {
                return res.status(400).json({ message: 'Endereço é obrigatório!' })
            }

            await service.CreateCliente(req.body)
            res.status(201).json({ message: 'Cliente criado com sucesso' })

        } catch (err) {
            if (err.status && err.message) {
                res.status(err.status).json({ message: err.message })
            
            } else if (err.name === 'SequelizeValidationError') {
                res.status(400).json({ message: err.message })
            
            } else {
                res.status(500).json({ message: 'Erro ao criar cliente' })
            }
        }
    }

    async UpdateCliente(req, res) {
        try {
            if (Object.keys(req.body).length === 0) {
                return res.status(400).json({ message: 'É necessário informar os dados que serão atualizados!' })
            } 

            const result = await service.UpdateCliente(req.params.id, req.body)
            
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Cliente não encontrado!' })
            
            } else {
                res.status(200).json({ message: 'Cliente atualizado com sucesso!' })
            }

        } catch (err) {
            if (err.status && err.message) {
                res.status(err.status).json({ message: err.message })
            
            } else {
                res.status(500).json({ message: 'Erro ao atualizar cliente' })
            }
        }
    }

    async DeleteCliente(req, res) {
        try {
            const result = await service.DeleteCliente(req.params.id)

            if ( result == null ) {
                return res.status(404).json({ message: 'Cliente não encontrado!' })
            
            } else {
                res.status(204).json({ message: 'Cliente deletado com sucesso' })
            }

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = ClienteController
