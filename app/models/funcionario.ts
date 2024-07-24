import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Clinica from './clinica.js'
import Medico from './medico.js'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cpf: string

  @column()
  declare dataNascimento: Date | string

  @column()
  declare endereco: string

  @column()
  declare contato: string

  @column()
  declare cargo: string

  @column()
  declare dataAdmissao: Date | string

  @column()
  declare clinicaId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Clinica)
  declare clinica: BelongsTo<typeof Clinica>

  @hasOne(() => Medico)
  declare medico: HasOne<typeof Medico>

}