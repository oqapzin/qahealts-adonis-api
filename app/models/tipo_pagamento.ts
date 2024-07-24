import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Consulta from './consulta.js'

export default class TipoPagamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare nome: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Consulta)
  declare consulta: BelongsTo<typeof Consulta>
}