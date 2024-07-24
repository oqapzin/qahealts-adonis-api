import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'consultas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().unique()
      table.dateTime('data_hora').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.integer('clinica_id').unsigned().references('id').inTable('clinicas').notNullable()
      table.integer('medico_id').unsigned().references('id').inTable('medicos').notNullable()
      table.integer('paciente_id').unsigned().references('id').inTable('pacientes').notNullable()
      table.integer('tipo_pagamento_id').unsigned().references('id').inTable('tipo_pagamentos').notNullable()
      table.integer('especialidade_id').unsigned().references('id').inTable('especialidades').notNullable()

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}