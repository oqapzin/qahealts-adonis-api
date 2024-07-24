// import type { HttpContext } from '@adonisjs/core/http'

import Consulta from "#models/consulta"
import Paciente from "#models/paciente"
import { UpdatePacienteValidator, createPacienteValidator } from "#validators/paciente"
import { HttpContext } from "@adonisjs/core/http"

export default class PacientesController {
    async consultas({ params }: HttpContext) {
        return Consulta.query().where('paciente_id',params.id)
    }

    async index({request}:HttpContext){
        const paginateSize = request.only(['perpage']).perpage || 5
        const paginate = request.only(['page']).page || 1

        return await Paciente.query().paginate(paginate,paginateSize)
    }

    async show({ params }: HttpContext) {
        return Paciente.query().where('id',params.id).preload('clinica').preload('consulta',(Consulta) => {
            Consulta.preload('medico').preload('especialidade').preload('prescicao').preload('tipoPagamento')
          }).first()
    }

    async update({ params,request }: HttpContext) {
        try {
            const paciente = await Paciente.findOrFail(params.id)

            const dados = await request.validateUsing(UpdatePacienteValidator)

            paciente.merge(dados)

            await paciente.save()

            return {msg: "Paciente atualizado com sucesso.", paciente}
        } catch(error) {
            return {msg: "Não foi possivel atualizar o paciente. Erro:",error}
        } 
       
    }

    async store({request}: HttpContext) {
        try {
            const dados = await request.validateUsing(createPacienteValidator)
            const paciente = await Paciente.create(dados)

            return {msg: "Paciente adicionado com sucesso.", paciente}

        } catch(error) {
            return {msg: "Não foi possivel adicionar o paciente. Erro:",error}
        }
      
    }

    async destroy({params}: HttpContext) {
        try {
            const paciente = await Paciente.findOrFail(params.id)
            await paciente.delete()
    
            return {msg: "Paciente removido com sucesso.",paciente}
           
        } catch (error) {
            return {msg: "O paciente não está na base de dados"}

        }
        
    }

}