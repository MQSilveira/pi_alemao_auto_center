const ClienteRepository = require('../repositories/ClienteRepository')

// Criar a valicação 

class ClienteService {
    async GetCliente() {
        const cliente = ClienteRepository.GetCliente()
        return cliente
    }

    async GetClienteById(id, transaction) {
        const cliente = ClienteRepository.GetClienteById(id, transaction)
        return cliente
    }

    async CreateCliente(data, transaction) {
        const cliente = ClienteRepository.CreateCliente(data, transaction)
        return cliente
    }

    async UpdateCliente(id, data, transaction) {
        const cliente = ClienteRepository.UpdateCliente(id, data, transaction)
        return cliente
    }

    async DeleteCliente(id, transaction) {
        const cliente = ClienteRepository.DeleteCliente(id, transaction)
        return cliente
    }
}

module.exports = ClienteService
