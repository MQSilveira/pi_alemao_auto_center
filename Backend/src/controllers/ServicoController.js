const ServicoService = require('../services/ServicoService')
const AdmService = require('../services/AdmService')
const ClienteService = require('../services/ClienteService')
const DataValidation = require('../utils/validation')

const servicoService = new ServicoService()
const admService = new AdmService()
const clienteService = new ClienteService()
const verify = new DataValidation()

class ServicoController {
    async GetServico(_, res) {
        try {
            const servico = await servicoService.GetServico()
            if (!servico) {
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
            if (!servico) {
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
            verify.CreateServico(req.body)
            
            let cliente = null

            if (req.body.cliente_id) {
                cliente = await clienteService.FindClienteById(req.body.cliente_id)

                if (!cliente) {
                    return res.status(404).json({ message: 'Cliente não encontrado!' })
                }
            
            } else if (req.body.cliente) {
                cliente = {
                    nome_completo: req.body.cliente.nome_completo_cliente,
                    telefone: req.body.cliente.telefone_cliente,
                    endereco: req.body.cliente.endereco_cliente
                }
                
                verify.CreateCliente(cliente)

                cliente = await clienteService.CreateCliente(cliente)

            } else {
                return res.status(400).json({ message: 'É necessário informar o cliente!' })
            }

            const ServicoData = {
                data_hora: req.body.data_hora,
                cliente_id: cliente.id,
                placa: req.body.placa,
                marca: req.body.marca,
                modelo: req.body.modelo,
                valor: req.body.valor,
                descricao_servico: req.body.descricao_servico,
                concluido: req.body.concluido || false,
                administrador_id: req.body.administrador_id
            }

            await servicoService.CreateServico(ServicoData)
            res.status(201).json({ message: 'Serviço criado com sucesso!' })
            
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }


    async UpdateServico(req, res) {
        try {

            if (Object.keys(req.body).length === 0) {
                return res.status(400).json({ message: 'É necessário informar os dados do serviço!' })
            }

            let AdmData = {}
            if (req.body.administrador_id) {
                const adm = await admService.FindAdmById(req.body.administrador_id)
                if (!adm) {
                    return res.status(404).json({ message: 'Administrador não encontrado!' })
                }

                AdmData = {
                    id: req.body.administrador_id,
                    nome_completo: req.body.nome_completo
                }
            }

            let ClienteData = {}
            if (req.body.cliente_id) {
                const cliente = await clienteService.FindClienteById(req.body.cliente_id)
                if (!cliente) {
                    return res.status(404).json({ message: 'Cliente não encontrado!' })
                }

                ClienteData = {
                    id: req.body.cliente_id,
                    nome_completo: req.body.nome_completo,
                    telefone: req.body.telefone,
                    endereco: req.body.endereco
                }
            }

            const servico = await servicoService.GetServicoById(req.params.id)

            if (!servico) {
                return res.status(404).json({ message: 'Serviço não encontrado!' })
            
            } else {
                const ServicoData = {
                    data_hora: req.body.data_hora || servico.data_hora,
                    cliente_id: ClienteData.id || servico.cliente_id,
                    placa: req.body.placa || servico.placa,
                    marca: req.body.marca || servico.marca,
                    modelo: req.body.modelo || servico.modelo,
                    concluido: req.body.concluido || servico.concluido,
                    descricao_servico: req.body.descricao_servico || servico.descricao_servico,
                    administrador_id: AdmData.id || servico.administrador_id,
                    valor: req.body.valor || servico.valor
                }

                await servicoService.UpdateServico(req.params.id, ServicoData)
                res.status(200).json({ message: 'Serviço atualizado com sucesso!' })
            }
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async DeleteServico(req, res) {
        try {
            
            const servico = await servicoService.FindServicoById(req.params.id)
            if (!servico) {
                return res.status(404).json({ message: 'Serviço não encontrado!' })
            }

            await servicoService.DeleteServico(req.params.id)
            res.status(200).json({ message: 'Serviço deletado com sucesso!' })

        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = ServicoController
