import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Clinica from './clinica.js'
import Medico from './medico.js'
import Consulta from './consulta.js'

export default class Especialidade extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare clinicaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany (()=> Medico)
  declare medico: HasMany<typeof Medico>

  @belongsTo(() => Clinica)
  declare clinica: BelongsTo<typeof Clinica>

  @belongsTo(() => Consulta)
  declare consulta: BelongsTo<typeof Consulta>
}