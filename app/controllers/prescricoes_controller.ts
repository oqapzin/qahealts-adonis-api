// import type { HttpContext } from '@adonisjs/core/http'
import Prescricoes from "#models/prescricoes"
import { UpdatePrescricoesValidator, createPrescricaoValidator } from "#validators/prescricoe"
import { HttpContext } from "@adonisjs/core/http"

export default class PrescricoesController {
    async index({request}:HttpContext){
        const paginateSize = request.only(['perpage']).perpage || 5
        const paginate = request.only(['page']).page || 1

        return Prescricoes.query().paginate(paginate,paginateSize)
    }

    async show({ params }: HttpContext) {
        return Prescricoes.query().where('id',params.id).preload('medico').preload('consulta').first()
    }

    async update({ params,request }: HttpContext) {
        try {
            const prescricoes = await Prescricoes.findOrFail(params.id)

            const dados = await request.validateUsing(UpdatePrescricoesValidator)
    
            prescricoes.merge(dados)
    
            await prescricoes.save()

            return {msg: "Prescição atualizado com sucesso.", prescricoes}
        } catch(error) {
            return {msg: "Não foi possivel atualizar a prescição. Erro:",error}
        }
    }

    async store({request}: HttpContext) {
        try {
            const dados = await request.validateUsing(createPrescricaoValidator)
            const tipoPagamento = await Prescricoes.create(dados)

            return {msg: "Prescrição adicionada com sucesso.", tipoPagamento}

        } catch(error) {
            return {msg: "Não foi possivel adicionar a prescrição médica. Erro:",error}
        }
    }

    async destroy({params}: HttpContext) {
        try {
            const tipoPagamento = await Prescricoes.findOrFail(params.id)
            await tipoPagamento.delete()
    
            return {msg: "Prescrição removida com sucesso."}

        } catch(error) {
            return {msg: "Não foi possivel remover a prescrição médica. Erro:",error}
        }
    }
}