import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Paciente from './paciente.js'
import Clinica from './clinica.js'
import TipoPagamento from './tipo_pagamento.js'
import Especialidade from './especialidade.js'
import Medico from './medico.js'
import Prescricoes from './prescricoes.js'

export default class Consulta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clinicaId: number

  @column()
  declare pacienteId: number

  @column()
  declare medicoId: number 

  @column()
  declare tipoPagamentoId: number

  @column()
  declare especialidadeId: number 

  @column()
  declare dataHora: Date | string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Paciente)
  declare paciente: BelongsTo<typeof Paciente>

  @belongsTo(() => Clinica)
  declare clinica: BelongsTo<typeof Clinica>

  @belongsTo(() => TipoPagamento)
  declare tipoPagamento: BelongsTo<typeof TipoPagamento>

  @belongsTo(() => Especialidade)
  declare especialidade: BelongsTo<typeof Especialidade>

  @belongsTo(() => Medico)
  declare medico: BelongsTo<typeof Medico>

  @hasMany(()=> Prescricoes)
  declare prescicao: HasMany<typeof Prescricoes>
}