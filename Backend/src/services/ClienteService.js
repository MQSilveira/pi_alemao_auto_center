const ClienteRepository = require('../repositories/ClienteRepository')

const repositories = new ClienteRepository()

class ClienteService {
    async GetCliente() {
        const cliente = repositories.GetCliente()
        return cliente
    }

    async GetClienteById(id, transaction) {
        const cliente = repositories.GetClienteById(id, transaction)
        return cliente
    }

    async CreateCliente(data, transaction) {
        const cliente = repositories.CreateCliente(data, transaction)
        return cliente
    }

    async UpdateCliente(id, data, transaction) {
        const cliente = repositories.UpdateCliente(id, data, transaction)
        return cliente
    }

    async DeleteCliente(id, transaction) {
        const cliente = repositories.DeleteCliente(id, transaction)
        return cliente
    }
}

module.exports = ClienteService
