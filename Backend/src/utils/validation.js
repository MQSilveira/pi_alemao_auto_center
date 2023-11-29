
class DataValidation {
    CreateCliente = (...data) => {

        const { nome_completo, contato, endereco } = data[0]

        const validation = [
            { condition: Object.keys(data).length === 0, message: 'É necessário informar os dados do cliente!' },
            { condition: !nome_completo, message: 'Nome do cliente é obrigatório!' },
            { condition: !contato, message: 'Contato do cliente é obrigatório!' },
            { condition: !endereco, message: 'Endereço do cliente é obrigatório!' }
        ]

        const validationErrors = validation.filter(field => field.condition)
        

        if (validationErrors.length > 0) {
            throw new Error(validationErrors[0].message)
        }

        return true
    }

    CreateServico = (...data) => {
        
        const { data_hora, placa, marca, modelo, descricao_servico, administrador_id } = data[0]

        const validation = [
            { condition: Object.keys(data).length === 0, message: 'É necessário informar os dados do serviço!' },
            { condition: !data_hora, message: 'Data e hora do serviço são obrigatórios!' },
            { condition: !placa, message: 'Placa do veículo é obrigatória!' },
            { condition: !marca, message: 'Marca do veículo é obrigatória!' },
            { condition: !modelo, message: 'Modelo do veículo é obrigatório!' },
            { condition: !descricao_servico, message: 'Descrição do serviço é obrigatória!' },
            { condition: !administrador_id, message: 'Administrador é obrigatório!' }
        ]

        const validationErrors = validation.filter(field => field.condition)

        if (validationErrors.length > 0) {
            throw new Error(validationErrors[0].message)
        }

        return true
    }
}


module.exports = DataValidation