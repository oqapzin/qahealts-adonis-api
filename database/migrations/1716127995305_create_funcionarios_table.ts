import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().unique()
      table.string('nome',50).notNullable()
      table.string('cpf',15).unique()
      table.date('data_nascimento').notNullable()
      table.string('endereco',40).notNullable()
      table.string('contato',15).notNullable()
      table.string('cargo',25)
      table.date('data_admissao').notNullable()

      table.integer('clinica_id').unsigned().references('id').inTable('clinicas').notNullable()


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}