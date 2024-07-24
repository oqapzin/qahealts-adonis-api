import TipoPagamento from '#models/tipo_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await TipoPagamento.createMany([
      { id: 1, nome: 'Dinheiro' },
      { id: 2, nome: 'Cartão de Crédito' },
      { id: 3, nome: 'Cartão de Débito' },
      { id: 4, nome: 'PIX' },
      { id: 5, nome: 'Boleto Bancário' }
    ])
  }
}