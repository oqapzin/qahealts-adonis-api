import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'especialidades'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().unique()
      table.string('nome',25).unique()
      table.integer('clinica_id').unsigned().references('id').inTable('clinicas').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}