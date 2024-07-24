// import type { HttpContext } from '@adonisjs/core/http'

import TipoPagamento from "#models/tipo_pagamento"
import { UpdateTipoPagamentoValidator, createTipoPagamentoValidator } from "#validators/tipo_pagamento"
import { HttpContext } from "@adonisjs/core/http"

export default class TipoPagamentosController {
    async index({request}:HttpContext){
        const paginateSize = request.only(['perpage']).perpage || 5
        const paginate = request.only(['page']).page || 1
        
        return TipoPagamento.query().paginate(paginate,paginateSize)
    }

    async show({ params }: HttpContext) {
        return TipoPagamento.findOrFail(params.id)
    }

    async update({ params,request }: HttpContext) {
        try {
            const tipoPagamento = await TipoPagamento.findOrFail(params.id)
            const dados = await request.validateUsing(UpdateTipoPagamentoValidator)
    
            tipoPagamento.merge(dados)
    
            await tipoPagamento.save()

            return {msg: "Tipo de pagamento atualizado com sucesso.", tipoPagamento}
        } catch(error) {
            return {msg: "Não foi possivel atualizar o tipo de pagamento. Erro:",error}
        }
    }

    async store({request}: HttpContext) {
        try {
            const dados = await request.validateUsing(createTipoPagamentoValidator)
            const tipoPagamento = await TipoPagamento.create(dados)

            return {msg: "Tipo de pagamento adicionado com sucesso.", tipoPagamento}

        } catch(error) {
            return {msg: "Não foi possivel adicionar o tipo de pagamento. Erro:",error}
        }
    }

    async destroy({params}: HttpContext) {
        try {
            const tipoPagamento = await TipoPagamento.findOrFail(params.id)
            await tipoPagamento.delete()
    
            return {msg: "Tipo de pagamento removido com sucesso."}

        } catch(error) {
            return {msg: "Não foi possivel remover o tipo de pagamento. Erro:",error}
        }
    }
}