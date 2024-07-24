import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clinicas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().unique()
      table.string("nome",50).notNullable().unique()
      table.string("telefone",15)
      table.string("endereco",100).notNullable().unique()
      table.string("responsavel",50).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}