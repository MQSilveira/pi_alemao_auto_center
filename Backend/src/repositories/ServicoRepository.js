const Servico = require('../models/Servico')
const DataEncrypter = require('../utils/encrypter')
const Administrador = require('../models/Administrador')
const Cliente = require('../models/Cliente')

// AJUSTAR O UPDATED_AT //
// AO CRIAR UM SERVIÇO, O CAMPO UPDATED_AT É CRIADO COM O MESMO VALOR DE CREATED_AT //


const encrypter = new DataEncrypter()

class ServicoRepository {
    async GetServico() {
        try {
            const servico = await Servico.findAll({
                include : [
                    {
                        model: Administrador,
                        attributes: ['id', 'nome_completo'],
                        as: 'administrador'
                    },
                    {
                        model: Cliente,
                        attributes: ['id', 'nome_completo', 'telefone', 'endereco'],
                        as: 'cliente'
                    }
                ]
            })

            return servico
        }
        catch (err) {
            throw err
        }
    }


    async GetServicoById(id, transaction) {
        const servico = await Servico.findOne(
            {
                where: { id },
                include : [
                    {
                        model: Administrador,
                        attributes: ['id', 'nome_completo'],
                        as: 'administrador'
                    },
                    {
                        model: Cliente,
                        attributes: ['id', 'nome_completo', 'telefone', 'endereco'],
                        as: 'cliente'
                    }
                ]
            },
            { transaction }
        )
        return servico
    }

    async FindServicoById(id, transaction) {
        const servico = await Servico.findOne(
            {
                where: { id },
                attributes: ['id']
            },
            { transaction }
        )
        return servico
    }


    

    async CreateServico(data, transaction) { 
        const servico = await Servico.create(
            {
                data_horario: data.data_horario,
                cliente_id: data.cliente_id,
                placa_veiculo: data.placa_veiculo,
                marca_veiculo: data.marca_veiculo,
                modelo_veiculo: data.modelo_veiculo,
                descricao_servico: data.descricao_servico,
                administrador_id: data.administrador_id,
                concluido: data.concluido,
                valor: data.valor
            },
            { transaction }
        )
        return servico
    }

    async UpdateServico(id, data, transaction) {
        Servico.update(
            {
                data_horario: data.data_horario,
                cliente_id: data.cliente_id,
                placa_veiculo: data.placa_veiculo,
                marca_veiculo: data.marca_veiculo,
                modelo_veiculo: data.modelo_veiculo,
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
        return true
    }
}

module.exports = ServicoRepository

