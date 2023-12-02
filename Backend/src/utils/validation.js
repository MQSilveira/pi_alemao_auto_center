
class DataValidation {
    CreateCliente = (...data) => {

        const { nome_completo, telefone, endereco } = data[0]

        const validation = [
            { condition: Object.keys(data).length === 0, message: 'É necessário informar os dados do cliente!' },
            { condition: !nome_completo, message: 'Nome do cliente é obrigatório!' },
            { condition: !telefone, message: 'Telefone do cliente é obrigatório!' },
            { condition: !endereco, message: 'Endereço do cliente é obrigatório!' }
        ]

        const validationErrors = validation.filter(field => field.condition)
        

        if (validationErrors.length > 0) {
            throw new Error(validationErrors[0].message)
        }

        return true
    }

    CreateServico = (...data) => {
        
        const { data_horario, placa_veiculo, marca_veiculo, modelo_veiculo, descricao_servico, administrador_id } = data[0]

        const validation = [
            { condition: Object.keys(data).length === 0, message: 'É necessário informar os dados do serviço!' },
            { condition: !data_horario, message: 'Data e hora do serviço são obrigatórios!' },
            { condition: !placa_veiculo, message: 'Placa do veículo é obrigatória!' },
            { condition: !marca_veiculo, message: 'Marca do veículo é obrigatória!' },
            { condition: !modelo_veiculo, message: 'Modelo do veículo é obrigatório!' },
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