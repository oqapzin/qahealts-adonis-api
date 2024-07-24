import Medico from '#models/medico'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Medico.createMany([
      { id: 1, funcionarioId: 1, especialidadeId: 1, crm: '2024-06-10 09:00:00' },
      { id: 2, funcionarioId: 2, especialidadeId: 2, crm: '2024-06-11 10:00:00' },
      { id: 3, funcionarioId: 3, especialidadeId: 3, crm: '2024-06-12 11:00:00' }
    ])  
  }
}