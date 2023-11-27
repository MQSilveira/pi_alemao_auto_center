const Servico = require('../models/Servico')
const DataEncrypter = require('../utils/encrypter')

const encrypter = new DataEncrypter()

class ServicoRepository {
    async GetServico() {
        const servico = await Servico.findAll()
        return servico
    }

    async GetServicoById(id, transaction) {
        const servico = await Servico.findOne(
            {
                where: { id },
                include : [
                    {
                        model: Administrador
                    },
                    {
                        model: Cliente
                    }
                ]
            },
            { transaction }
        )
        return servico
    }

    async CreateServico(data, transaction) {
        const hashedPassword = await encrypter.HashPassword(data.senha)
        
        const servico = await Servico.create(
            {
                data_hora: data.data_hora,
                cliente_id: data.cliente_id,
                placa: data.placa,
                marca: data.marca,
                modelo: data.modelo,
                concluido: data.concluido,
                descricao_servico: data.descricao_servico,
                administrador_id: data.administrador_id,
                created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            },
            { transaction }
        )
        return servico
    }

    async UpdateServico(id, data, transaction) {
        Servico.update(
            {
                data_hora: data.data_hora,
                cliente_id: data.cliente_id,
                placa: data.placa,
                marca: data.marca,
                modelo: data.modelo,
                concluido: data.concluido,
                descricao_servico: data.descricao_servico,
                administrador_id: data.administrador_id,
                updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
            },
            { where: { id: id }},
            { transaction }
        )
    }

    async DeleteServico(id, transaction) {
        Servico.destroy(
            { where: { id: id } },
            { transaction }
        )
    }
}

module.exports = ServicoRepository

