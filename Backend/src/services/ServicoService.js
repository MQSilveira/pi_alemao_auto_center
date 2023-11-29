const ServicoRepository = require('../repositories/ServicoRepository')

const repositories = new ServicoRepository()

class ServicoService {
    async GetServico() {
        const servico = repositories.GetServico()
        return servico
    }

    async GetServicoById(id, transaction) {
        const servico = repositories.GetServicoById(id, transaction)
        return servico
    }

    async FindServicoById(id, transaction) {
        const servico = repositories.FindServicoById(id, transaction)
        return servico
    }
    
    async CreateServico(data, transaction) {
        const servico = repositories.CreateServico(data, transaction)
        return servico
    }

    async UpdateServico(id, data, transaction) {
        const servico = repositories.UpdateServico(id, data, transaction)
        return servico
    }

    async DeleteServico(id, transaction) {
        const servico = repositories.DeleteServico(id, transaction)
        return servico
    }
}

module.exports = ServicoService
