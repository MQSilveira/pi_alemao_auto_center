const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const ServicoService = require('../services/ServicoService')
const AdmService = require('../services/AdmService')
const ClienteService = require('../services/ClienteService')

const config = require('../config')

const servicoService = new ServicoService()
const admService = new AdmService()
const clienteService = new ClienteService()


class ServicoController {
    async GetServico(_, res) {
        try {
            const servico = await servicoService.GetServico()
            if (servico === null) {
                return res.status(404).json({ message: 'Não há serviços cadastrados!' })
            }

            res.status(200).json({ data: servico })
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async GetServicoById(req, res) {
        try {
            const servico = await servicoService.GetServicoById(req.params.id)
            if (servico === null) {
                return res.status(404).json({ message: 'Serviço não encontrado!' })
            }

            res.status(200).json({ data: servico })
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async CreateServico(req, res) {
        try {
            const validation = [
                { condition: Object.keys(req.body).length === 0, message: 'É necessário informar os dados do serviço!' },
                { condition: !req.body.data_hora, message: 'Data e hora são obrigatórios!' },
                { condition: !req.body.cliente_id, message: 'Cliente é obrigatório!' },
                { condition: !req.body.placa, message: 'Placa é obrigatória!' },
                { condition: !req.body.marca, message: 'Marca é obrigatória!' },
                { condition: !req.body.modelo, message: 'Modelo é obrigatório!' },
                { condition: !req.body.descricao_servico, message: 'Descrição do serviço é obrigatória!' },
                { condition: !req.body.administrador_id, message: 'Administrador é obrigatório!' }
            ]

            const validationErrors = validation.filter(field => field.condition)

            if (validationErrors.length > 0) {
                return res.status(400).json({ message: validationErrors[0].message })
            }
            
            const adm = await admService.FindAdmById(req.body.administrador_id)
            if (adm === null) {
                return res.status(404).json({ message: 'Administrador não encontrado!' })
            }

            const cliente = await clienteService.FindClienteById(req.body.cliente_id)
            if (cliente === null) {
                return res.status(404).json({ message: 'Cliente não encontrado!' })
            }

            const ServicoData = {
                data_hora: req.body.data_hora,
                cliente_id: cliente,
                placa: req.body.placa,
                marca: req.body.marca,
                modelo: req.body.modelo,
                valor: req.body.valor,
                descricao_servico: req.body.descricao_servico,
                administrador_id: adm
            }

            await servicoService.CreateServico(ServicoData)
            res.status(201).json({ message: 'Serviço criado com sucesso!' })
            
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

        // FAZER O UPDATE //
    async UpdateServico(req, res) {
        try {
            const AdmData = {
                nome_completo: req.body.nome_completo
            }
            const adm = await admService.UpdateAdm(req.params.id, AdmData)

            const ClienteData = {
                nome_completo: req.body.nome_completo,
                contato: req.body.contato,
                endereco: req.body.endereco
            }
            const cliente = await clienteService.UpdateCliente(req.params.id, ClienteData)

            const ServicoData = {
                data_hora: req.body.data_hora,
                cliente_id: cliente.id,
                placa: req.body.placa,
                marca: req.body.marca,
                modelo: req.body.modelo,
                descricao_servico: req.body.descricao_servico,
                administrador_id: adm.id
            }
            const servico = await servicoService.UpdateServico(req.params.id, ServicoData)

            res.status(200).json(servico)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async DeleteServico(req, res) {
        try {
            await servicoService.DeleteServico(req.params.id)
            res.status(204).json(
                { 
                    message: 'Serviço deletado com sucesso!' 
                }
            )
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = ServicoController
