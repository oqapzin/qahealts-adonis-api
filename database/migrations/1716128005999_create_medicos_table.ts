import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'medicos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().unique()
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios').notNullable()
      table.integer('especialidade_id').unsigned().references('id').inTable('especialidades').notNullable()
      table.string('crm',10).notNullable().unique() // 6 num + crm

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}