// import type { HttpContext } from '@adonisjs/core/http'

import Especialidade from "#models/especialidade"
import { UpdateEspecialidadeValidator, createEspecialidadeValidator } from "#validators/especialidade"
import { HttpContext } from "@adonisjs/core/http"

export default class EspecialidadesController {
    async index({request}:HttpContext){
        const paginateSize = request.only(['perpage']).perpage || 5
        const paginate = request.only(['page']).page || 1

        return Especialidade.query().paginate(paginate,paginateSize)
    }

    async show({ params }: HttpContext) {
        return Especialidade.query().where('id',params.id).preload('clinica').first()
    }

    async update({ params,request }: HttpContext) {
        try {
            const especialidade = await Especialidade.findOrFail(params.id)
            const dados = await request.validateUsing(UpdateEspecialidadeValidator)

            especialidade.merge(dados)

            await especialidade.save()

            return {msg: "Especialidade atualizada com sucesso.", especialidade}
        } catch(error) {
            return {msg: "Não foi possivel atualizar a especialidade. Erro:",error}
        }
    }

    async store({request}: HttpContext) {
        try {
            const dados = await request.validateUsing(createEspecialidadeValidator)
            const especialidade = await Especialidade.create(dados)
            
            return {msg: "Especialidade adicionada com sucesso.", especialidade}
        } catch(error) {
            return {msg: "Não foi possivel adicionar a especialidade. Erro:",error}
        }
    }

    async destroy({params}: HttpContext) {
        try {
            const cargo = await Especialidade.findOrFail(params.id)
            await cargo.delete()
    
            return {msg: "Especialidade removida com sucesso"}

        } catch(error) {
            return {msg: "Não foi possivel remover a especialidade. Erro:",error}
        }
       
    }
}