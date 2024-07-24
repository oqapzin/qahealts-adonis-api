import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Especialidade from './especialidade.js'
import Funcionario from './funcionario.js'
import Consulta from './consulta.js'
import Prescricoes from './prescricoes.js'

export default class Medico extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare funcionarioId: number | null

  @column()
  declare especialidadeId: number | null

  @column()
  declare crm: string 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Funcionario)
  declare funcionario: BelongsTo<typeof Funcionario>

  @belongsTo(() => Especialidade)
  declare especialidade: BelongsTo<typeof Especialidade>

  @belongsTo(() => Consulta)
  declare consulta: BelongsTo<typeof Consulta>

  @hasOne(()=> Prescricoes)
  declare prescicao: HasOne<typeof Prescricoes>
}