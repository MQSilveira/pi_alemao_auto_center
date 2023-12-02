const { describe, expect, it } = require('@jest/globals')
const ServicoService = require("../src/services/ServicoService")

describe('Testes Servico', () => {

   const servico = new ServicoService()

   it('Criar Servico', async () => {
      const data = {
         data_horario: "2023-12-27T09:00:00",
         cliente_id: "1",
         placa_veiculo: "KYAJ2A89",
         marca_veiculo: "kya",
         modelo_veiculo: "sportage",
         descricao_servico: "troca de oleo",
         administrador_id: "1",
         concluido: "true",
         valor: "250.79"
      }
      const result = await servico.CreateServico(data)
      console.log(result)
      // expect(result.id).toBe(1);
      expect(result.data_horario).toBe(data.data_horario);
      expect(result.cliente_id).toBe(data.cliente_id);
      expect(result.placa_veiculo).toBe(data.placa_veiculo);
      expect(result.marca_veiculo).toBe(data.marca_veiculo);
      expect(result.modelo_veiculo).toBe(data.modelo_veiculo);
      expect(result.concluido).toBe(data.descricao_servico);
      expect(result.descricaoservico).toBe(data.administrador_id);
      expect(result.valor).toBe(data.concluido);
      expect(result.marca).toBe(data.valor);

   })

//    it('Atualizar Servico', async () => {
//       const result = await servico.UpdateServico(1)
//       console.log(result)

//       expect(result.id).toBe(1);
//       expect(result.data_hora).toBe('2023-12-27T08:00:00');
//       expect(result.placa).toBe('KYAJ2A89');
//       expect(result.marca).toBe('kya');
//       expect(result.modelo).toBe('sportage');
//       expect(result.concluido).toBe('sim');
//       expect(result.descricaoservico).toBe('troca de oleo');
//       expect(result.valor).toBe('265,79');
//    })

//    it('Deletar Servico', async () => {
//       const result = await servico.DeleteServico(1)
//       console.log(result)

//       expect(result.id).toBe(1);
//    })

//    it('Buscar todos o Servicos', async () => {
//       const result = await servico.GetServico(1)
//       console.log(result)

//       // expect(result.id).toBe(1);
//       expect(result.nome_completo).toBe('Alemao');

//       // expect(result.id).toBe(1);
//       expect(result.nome_completo).toBe('Prepario');
//       expect(result.telefone).toBe('987654321');
//       expect(result.endereco).toBe('rua sem saida, 100, bairro: botos')
//    })

//    it('Buscar unico Servico', async () => {
//       const result = await servico.GetServicoById(1)
//       console.log(result)

//       expect(result.id).toBe(1);
    
// })

//    it('Encontrar Servico', async () => {
//       const result = await servico.FindServicoById(1)
//       console.log(result)

//       expect(result.id).toBe(1);
//       // expect(result.nome).toBe('Pingo');
//       // expect(result.raca).toBe('viralata');
//       // expect(result.cliente).toBe('João da Silva')
//    })
})

