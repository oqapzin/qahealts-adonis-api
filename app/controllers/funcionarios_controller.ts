// import type { HttpContext } from '@adonisjs/core/http'

import Funcionario from "#models/funcionario"
import Medico from "#models/medico"
import { createFuncionarioValidator } from "#validators/funcionario"
import { HttpContext } from "@adonisjs/core/http"

export default class FuncionariosController {
    async index({request}:HttpContext){
        const paginateSize = request.only(['perpage']).perpage || 5
        const paginate = request.only(['page']).page || 1
        
        return Funcionario.query().paginate(paginate,paginateSize)
    }

    async show({ params }: HttpContext) {
        return Funcionario.query().where('id',params.id).preload('clinica').preload('medico').first()
    }

    async update({ params,  request }: HttpContext) {
        try {
            const funcionario = await Funcionario.findOrFail(params.id)

            const dados = await request.validateUsing(createFuncionarioValidator);
    
            funcionario.merge(dados)
    
            await funcionario.save()

            return {msg: "Funcionário atualizado com sucesso.", funcionario}
        } catch(error) {
            return {msg: "Não foi possivel atualizar o funcionário. Erro:",error}
        }
    }

    async store({request}: HttpContext) {
        const dados = await request.validateUsing(createFuncionarioValidator);

        if (dados.cargo === "Medico") {
            try {
                const dataCreated = await Funcionario.create({
                    nome: dados.nome,
                    cpf: dados.cpf,
                    endereco: dados.endereco,
                    dataNascimento: dados.dataNascimento,
                    contato: dados.contato,
                    cargo: dados.cargo,
                    dataAdmissao: dados.dataAdmissao,
                    clinicaId: dados.clinicaId, 
                });
                const medicCreated = await Medico.create({
                    funcionarioId: dataCreated.id,
                    especialidadeId: dados.especialidadeId,
                    crm: dados.crm
                });
        
                return { msg:"Funcionário e médico adicionados com sucesso. ", medicCreated, dataCreated };
            } catch (error) {
                return { error: "Ocorreu um erro ao criar o médico.", details: error.message };
            }
        }
        
        try {
            const funcionarioCreated = await Funcionario.create(dados);
            return { msg: "Funcionário adicionado com sucesso. ",funcionarioCreated };
        } catch (error) {
            return { error: "Ocorreu um erro ao criar o funcionário.", details: error.message };
        }

    }

    async destroy({params}: HttpContext) {
        try {
            const funcionario = await Funcionario.findOrFail(params.id)
            await funcionario.delete()

            if (funcionario.$attributes.cargo == "Medico") {
                await Medico.query().where('funcionario_id', params.id).delete();
                 return { msg: "Médico removido com sucesso" };
            }

            return {msg: "Funcionário removido com sucesso"}
        } catch (error) {
            return {msg: "Funcionário não existe no banco de dados."}
        }
    }
}