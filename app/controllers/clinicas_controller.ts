// import type { HttpContext } from '@adonisjs/core/http'

import Clinica from "#models/clinica"
import { createClinicaValidator, updateClinicaValidator } from "#validators/clinica"
import { HttpContext } from "@adonisjs/core/http"

export default class ClinicasController {
    async index({request}:HttpContext){
        const paginateSize = request.only(['perpage']).perpage || 5
        const paginate = request.only(['page']).page || 1

        return Clinica.query().paginate(paginate,paginateSize)
    }

    async show({ params }: HttpContext) {
        return Clinica.query().where('id',params.id).preload('funcionario').preload('especialidades').first()
    }

    async update({ params,request }: HttpContext) {
        try {
            const clinica = await Clinica.findOrFail(params.id)

            const dados = await request.validateUsing(updateClinicaValidator)
    
            clinica.merge(dados)
    
            await clinica.save()

            return {msg: "Tipo de pagamento atualizado com sucesso.", clinica}
        } catch(error) {
            return {msg: "Não foi possivel atualizar o tipo de pagamento. Erro:",error}
        }
       
    }

    async store({request}: HttpContext) {
        try {
            const dados = await request.validateUsing(createClinicaValidator)
            const clinica = Clinica.create(dados)

            return {msg: "Clinica adicionado com sucesso.", clinica}

        } catch(error) {
            return {msg: "Não foi possivel adicionar a clinica. Erro:",error}
        }
        
    }

    async destroy({params}: HttpContext) {
        try {
            const cargo = await Clinica.findOrFail(params.id)
            await cargo.delete()
    
            return {msg: "Clinica deletada com sucesso"}

        } catch(error) {
            return {msg: "Não foi possivel remover a clinica. Erro:",error}
        }    
    }
}