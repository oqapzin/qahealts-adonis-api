// import type { HttpContext } from '@adonisjs/core/http'

import Consulta from "#models/consulta"
import  { UpdateConsultaValidator, createConsultaValidator } from "#validators/consulta"
import { HttpContext } from "@adonisjs/core/http"

export default class ConsultasController {
    async index({request}:HttpContext){
        const paginateSize = request.only(['perpage']).perpage || 5
        const paginate = request.only(['page']).page || 1

        return Consulta.query().paginate(paginate,paginateSize)
    }

    async show({ params }: HttpContext) {
        return Consulta.query().where('id',params.id).preload('paciente').preload('medico').preload('especialidade').preload('clinica').preload('tipoPagamento').preload('prescicao').first()
    }

    async update({ params,request }: HttpContext) {
        try {
            const consulta = await Consulta.findOrFail(params.id)

            const dados = await request.validateUsing(UpdateConsultaValidator)

            if (dados.medicoId || dados.dataHora) {
                const medicoId = dados.medicoId || consulta.medicoId
                const dataHora = dados.dataHora || consulta.dataHora
            
                const checarHorario = await Consulta.query()
                    .where('medico_id', medicoId)
                    .where('dataHora', dataHora)
                    .first()
            
                if (checarHorario) {
                    return { msg: 'Já existe uma consulta marcada nesse horário com esse médico.' }
                }
            }
            consulta.merge(dados)

            await consulta.save()

            return {msg: "Consulta atualizada com sucesso.", consulta}
        } catch(error) {
            return {msg: "Não foi possivel atualizar a consulta. Erro:",error}
        }
       
    }

    async store({request}: HttpContext) {
        try {
            const dados = await request.validateUsing(createConsultaValidator)
            
            const checarHorario = await Consulta.query()
            .where('medico_id', dados.medicoId)
            .where('dataHora', dados.dataHora)
            .first()
            
            if (checarHorario) 
                return { message: 'Já existe uma consulta marcada nesse horário' }
            
            const consulta = await Consulta.create(dados)
            return {msg: "Consulta adicionada com sucesso.", consulta}

        } catch(error) {
            return {msg: "Não foi possivel adicionar a consulta. Erro:",error}
        }
       
    }

    async destroy({params}: HttpContext) {
        try {
            const cargo = await Consulta.findOrFail(params.id)
            await cargo.delete()
    
            return {msg: "Consulta removida com sucesso."}

        } catch(error) {
            return {msg: "Não foi possivel remover a consulta. Erro:",error}
        }
    }
}