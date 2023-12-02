// const { describe, expect, it } = require('@jest/globals')

// const ClienteService = require("../Backend/src/services/ClienteService")

// describe('Testes Cliente', () => {

//     const servico = new ClienteService()

//     it('Criar cliente', async () => {
//         const result = await servico.CreateCliente(1)
  
//         expect(result.nome_completo).toBe('João da Silva');
//         expect(result.telefone).toBe('987651234');
//         expect(result.endereco).toBe('rua ');

//      })
  
//      it('Atualizar Cliente', async () => {
//         const result = await servico.UpdateCliente(1)
  
//         expect(result.id).toBe(1);
//         expect(result.nome).toBe('Pingo');
//         expect(result.raca).toBe('viralata');
//         expect(result.cliente).toBe('João da Silva')
//      })
  
//      it('Excluir Cliente', async () => {
//         const result = await servico.DeleteCliente(1)
  
//         expect(result.id).toBe(1);
//         expect(result.nome).toBe('Pingo');
//         expect(result.raca).toBe('viralata');
//         expect(result.cliente).toBe('João da Silva')
//      })
  
//      it('Visualizar todos os Clientes', async () => {
//         const result = await servico.GetCliente(1)
  
//         expect(result.id).toBe(1);
//         expect(result.nome).toBe('Pingo');
//         expect(result.raca).toBe('viralata');
//         expect(result.cliente).toBe('João da Silva')
//      })
  
//      it('Buscar unico Cliente', async () => {
//         const result = await servico.GetClienteById(1)
  
//         expect(result.id).toBe(1);
//         expect(result.nome).toBe('Pingo');
//         expect(result.raca).toBe('viralata');
//         expect(result.cliente).toBe('João da Silva')
//      })
  
//      it('Procurar Cliente', async () => {
//         const result = await servico.FindClienteById(1)
  
//         expect(result.id).toBe(1);
//         expect(result.nome).toBe('Pingo');
//         expect(result.raca).toBe('viralata');
//         expect(result.cliente).toBe('João da Silva')
//      })
  
// })