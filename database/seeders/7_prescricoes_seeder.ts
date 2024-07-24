import Prescricoes from '#models/prescricoes'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Prescricoes.createMany([
      { id: 1, descricao: 'Receita para dor de cabeça', data: '2024-06-10', consultaId: 1, medicoId: 1 },
      { id: 2, descricao: 'Receita para gripe', data: '2024-06-11', consultaId: 2, medicoId: 2 },
      { id: 3, descricao: 'Receita para alergia', data: '2024-06-12', consultaId: 3, medicoId: 3 },
      { id: 4, descricao: 'Receita para dor nas costas', data: '2024-06-13', consultaId: 4, medicoId: 4 },
      { id: 5, descricao: 'Receita para pressão alta', data: '2024-06-14', consultaId: 5, medicoId: 5 },
      { id: 6, descricao: 'Receita para enxaqueca', data: '2024-06-15', consultaId: 6, medicoId: 6 },
    ])  
  }
}