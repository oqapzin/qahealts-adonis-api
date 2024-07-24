import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Clinica from './clinica.js'
import Consulta from './consulta.js'

export default class Paciente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cpf: string

  @column()
  declare contato: string

  @column()
  declare dataNascimento: Date | string

  @column()
  declare endereco: string

  @column()
  declare clinicaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Clinica)
  declare clinica: BelongsTo<typeof Clinica>

  @hasMany (()=> Consulta)
  declare consulta: HasMany<typeof Consulta>
}