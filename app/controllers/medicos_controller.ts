// import type { HttpContext } from '@adonisjs/core/http'

import Medico from "#models/medico"
import { UpdateMedicoValidator, createMedicoValidator } from "#validators/medico"
import { HttpContext } from "@adonisjs/core/http"

export default class MedicosController {
    async index({request}:HttpContext){
        const paginateSize = request.only(['perpage']).perpage || 5
        const paginate = request.only(['page']).page || 1

        return Medico.query().paginate(paginate,paginateSize)
    }

    async show({ params }: HttpContext) {
        return Medico.query().where('id',params.id).preload('especialidade').preload('funcionario').first()
    }

    async update({ params,request }: HttpContext) {
        try {
            
            const cargo = await Medico.findOrFail(params.id)
    
            const dados = await request.validateUsing(UpdateMedicoValidator)
    
            cargo.merge(dados)
    
            return await cargo.save(), {msg: 'Médico atualizado com sucesso'}

    
        } catch (error) {
            return {msg: "Não foi possivel atualizar o médico. Erro: ",error}
        }
    }

    async store({request}: HttpContext) {
        try {
            const dados = await request.validateUsing(createMedicoValidator)
            const medico = Medico.create(dados)
            return {msg: "Médico criado com sucesso. ",medico}
        } catch (error) {
            return {msg: "Não foi possivel cadastrar o médico. Erro: ",error}
        }
    }

    async destroy({params}: HttpContext) {
        try {
            const cargo = await Medico.findOrFail(params.id)
            await cargo.delete()
    
            return {msg: "Médico deletado com sucesso"}
           
        } catch (error) {
            return {msg: "O médico não está na base de dados"}
        }
    }
}