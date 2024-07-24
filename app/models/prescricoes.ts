import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Medico from './medico.js'
import Consulta from './consulta.js'

export default class Prescricoes extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare descricao: string

  @column()
  declare data: Date | string

  @column()
  declare consultaId: number

  @column()
  declare medicoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Medico,{
    foreignKey: 'medicoId'
  })
  declare medico: BelongsTo<typeof Medico>

  @hasMany(() => Consulta,{
    foreignKey: 'id'
  })
  declare consulta: HasMany<typeof Consulta>
}