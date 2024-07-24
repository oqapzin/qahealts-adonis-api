import Clinica from '#models/clinica'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Clinica.createMany([
      { nome: 'Clínica São José', telefone: '(11) 1234-5678', endereco: 'Rua Augusta, 123', responsavel: 'Maria' },
      { nome: 'Clínica Santa Maria', telefone: '(11) 9876-5432', endereco: 'Avenida Paulista, 456', responsavel: 'Pedro' },
      { nome: 'Clínica Santo Antônio', telefone: '(11) 1111-2222', endereco: 'Rua Oscar Freire, 789', responsavel: 'Fernanda' },
    ])
  }
}