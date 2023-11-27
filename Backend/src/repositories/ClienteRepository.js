const Cliente = require('../models/Cliente')

class ClienteRepository {
    async GetCliente() {
        const cliente = await Cliente.findAll()
        return cliente
    }

    async GetClienteById(id, transaction) {
        const cliente = await Cliente.findOne(
            {
                where: {
                    id: id
                }
            },
            { transaction }
        )
        return cliente
    }

    async CreateCliente(data, transaction) {
        const cliente = await Cliente.create(
            {
                nome_completo: data.nome_completo,
                contato: data.contato,
                endereco: data.endereco,
                created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            },
            { transaction }
        )
        return cliente
    }

    async UpdateCliente(id, data, transaction) {
        Cliente.update(
            {
                nome_completo: data.nome_completo,
                contato: data.contato,
                endereco: data.endereco,
                updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
            },
            { where: { id: id }},
            { transaction }
        )
    }

    async DeleteCliente(id, transaction) {
        Cliente.destroy(
            { where: { id: id } },
            { transaction }
        )
    }

}

module.exports = ClienteRepository
