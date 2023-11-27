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
            res.status(200).json({ data: servico })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async GetServicoById(req, res) {
        try {
            const servico = await servicoService.GetServicoById(req.params.id)
            res.status(200).json({ data: servico })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async CreateServico(req, res) {
        try {
            const AdmData = {
                nome_completo: req.body.nome_completo,
                email: req.body.email,
                senha: req.body.senha
            }
            const adm = await admService.CreateAdm(AdmData)

            const ClienteData = {
                nome_completo: req.body.nome_completo,
                contato: req.body.contato,
                endereco: req.body.endereco
            }
            const cliente = await clienteService.CreateCliente(ClienteData)

            const ServicoData = {
                data_hora: req.body.data_hora,
                cliente_id: cliente.id,
                placa: req.body.placa,
                marca: req.body.marca,
                modelo: req.body.modelo,
                descricao_servico: req.body.descricao_servico,
                administrador_id: adm.id
            }
            const servico = await servicoService.CreateServico(ServicoData)

            res.status(201).json(servico)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

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
