import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'prescricoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().unique()
      table.text('descricao')
      table.date('data')
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.integer('consulta_id').unsigned().references('id').inTable('consultas').notNullable()
      table.integer('medico_id').unsigned().references('id').inTable('medicos').notNullable()

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}