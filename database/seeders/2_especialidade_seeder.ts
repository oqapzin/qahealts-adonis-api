import Especialidade from '#models/especialidade'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Especialidade.createMany([
      { id: 1, nome: 'Cardiologia', clinicaId: 1 },
      { id: 2, nome: 'Ortopedia', clinicaId: 1 },
      { id: 3, nome: 'Dermatologia', clinicaId: 1 },
      { id: 4, nome: 'Neurologia', clinicaId: 1 },
      { id: 5, nome: 'Oftalmologia', clinicaId: 2 },
      { id: 6, nome: 'Otorrinolaringologia', clinicaId: 2 },
      { id: 7, nome: 'Ginecologia', clinicaId: 2 },
      { id: 8, nome: 'Urologia', clinicaId: 2 },
      { id: 9, nome: 'Pediatria', clinicaId: 3 },
      { id: 10, nome: 'Endocrinologia', clinicaId: 3 },
      { id: 11, nome: 'Nutrição', clinicaId: 3 },
      { id: 12, nome: 'Fisioterapia', clinicaId: 3 },
      { id: 13, nome: 'Psicologia', clinicaId: 4 },
      { id: 14, nome: 'Oncologia', clinicaId: 4 },
      { id: 15, nome: 'Psiquiatria', clinicaId: 4 },
      { id: 16, nome: 'Radiologia', clinicaId: 4 },
    ])
  }
}