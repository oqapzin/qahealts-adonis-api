import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Funcionario from './funcionario.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Especialidade from './especialidade.js'
import Paciente from './paciente.js'
import Consulta from './consulta.js'

export default class Clinica extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare telefone: string

  @column()
  declare endereco: string

  @column()
  declare responsavel: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany (()=> Funcionario)
  declare funcionario: HasMany<typeof Funcionario>

  @hasMany (()=> Paciente)
  declare Paciente: HasMany<typeof Paciente>

  @hasMany (()=> Especialidade)
  declare especialidades: HasMany<typeof Especialidade>

  @hasMany (()=> Consulta)
  declare Consultas: HasMany<typeof Consulta>
}