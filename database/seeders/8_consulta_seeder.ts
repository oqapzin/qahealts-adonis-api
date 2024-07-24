import Consulta from '#models/consulta'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Consulta.createMany([
      { clinicaId: 1, pacienteId: 1, tipoPagamentoId: 1, especialidadeId: 1, medicoId: 1, dataHora: '2024-06-10 09:00:00' },
      { clinicaId: 2, pacienteId: 2, tipoPagamentoId: 2, especialidadeId: 2, medicoId: 1, dataHora: '2024-06-11 10:00:00' },
      { clinicaId: 3, pacienteId: 3, tipoPagamentoId: 3, especialidadeId: 3, medicoId: 2, dataHora: '2024-06-12 11:00:00' },
      { clinicaId: 1, pacienteId: 4, tipoPagamentoId: 4, especialidadeId: 4, medicoId: 3, dataHora: '2024-06-13 12:00:00' },
      { clinicaId: 2, pacienteId: 5, tipoPagamentoId: 5, especialidadeId: 5, medicoId: 1, dataHora: '2024-06-14 13:00:00' },
      { clinicaId: 3, pacienteId: 6, tipoPagamentoId: 1, especialidadeId: 6, medicoId: 2, dataHora: '2024-06-15 14:00:00' },
      { clinicaId: 1, pacienteId: 7, tipoPagamentoId: 2, especialidadeId: 7, medicoId: 1, dataHora: '2024-06-16 15:00:00' },
      { clinicaId: 2, pacienteId: 8, tipoPagamentoId: 3, especialidadeId: 8, medicoId: 2, dataHora: '2024-06-17 16:00:00' },
      { clinicaId: 3, pacienteId: 9, tipoPagamentoId: 4, especialidadeId: 9, medicoId: 3, dataHora: '2024-06-18 17:00:00' },
      { clinicaId: 1, pacienteId: 10, tipoPagamentoId: 5, especialidadeId: 10, medicoId: 3, dataHora: '2024-06-19 18:00:00' },
      { clinicaId: 2, pacienteId: 11, tipoPagamentoId: 1, especialidadeId: 11, medicoId: 2, dataHora: '2024-06-20 19:00:00' },
      { clinicaId: 3, pacienteId: 12, tipoPagamentoId: 2, especialidadeId: 12, medicoId: 3, dataHora: '2024-06-21 20:00:00' },
    ])
  }
}