const ClienteService = require('../services/ClienteService')

const service = new ClienteService()

class ClienteController {
    async GetCliente(_, res) {
        try {
            const cliente = await service.GetCliente()
            res.status(200).json({ data: cliente })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async GetClienteById(req, res) {
        try {
            const cliente = await service.GetClienteById(req.params.id)
            res.status(200).json({ data: cliente })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async CreateCliente(req, res) {
        try {
            const cliente = await service.CreateCliente(req.body)
            res.status(201).json({ data: cliente })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async UpdateCliente(req, res) {
        try {
            await service.UpdateCliente(req.params.id, req.body)
            res.status(204).json()
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async DeleteCliente(req, res) {
        try {
            await service.DeleteCliente(req.params.id)
            res.status(204).json(
                { 
                    message: 'Cliente deletado com sucesso' 
                }
            )
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

}

module.exports = ClienteController
