import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      { id: 1, clinicaId: 3, nome: 'Dr. Carlos Andrade', cpf: '123.456.789-00', dataNascimento: '1980-03-15', endereco: 'Rua A, 123', contato: '(11) 98765-4321', cargo: 'Medico', dataAdmissao: '2010-05-15' },
      { id: 2, clinicaId: 2, nome: 'Dra. Maria Souza', cpf: '987.654.321-00', dataNascimento: '1985-07-20', endereco: 'Avenida B, 456', contato: '(21) 98765-4321', cargo: 'Medico', dataAdmissao: '2012-10-20' },
      { id: 3, clinicaId: 1, nome: 'Dr. João Oliveira', cpf: '456.789.012-00', dataNascimento: '1978-01-25', endereco: 'Rua C, 789', contato: '(31) 98765-4321', cargo: 'Medico', dataAdmissao: '2015-03-25' },
      { id: 4, clinicaId: 1, nome: 'Ana Lima', cpf: '789.012.345-00', dataNascimento: '1990-11-30', endereco: 'Rua D, 321', contato: '(41) 98765-4321', cargo: 'Recepcionista', dataAdmissao: '2018-12-10' },
      { id: 5, clinicaId: 2, nome: 'Clara Fernandes', cpf: '321.654.987-00', dataNascimento: '1983-06-12', endereco: 'Rua E, 567', contato: '(11) 98765-4321', cargo: 'Recepcionista', dataAdmissao: '2019-08-12' },
      { id: 6, clinicaId: 3, nome: 'Paula Ferreira', cpf: '654.987.123-00', dataNascimento: '1992-02-05', endereco: 'Avenida F, 890', contato: '(21) 98765-4321', cargo: 'Recepcionista', dataAdmissao: '2020-04-05' },
      { id: 7, clinicaId: 3, nome: 'Carlos Santos', cpf: '987.123.456-00', dataNascimento: '1989-09-22', endereco: 'Rua G, 234', contato: '(31) 98765-4321', cargo: 'Faxineiro', dataAdmissao: '2017-07-22' },
      { id: 8, clinicaId: 1, nome: 'Gustavo Lima', cpf: '456.789.012-00', dataNascimento: '1975-05-10', endereco: 'Avenida H, 901', contato: '(41) 98765-4321', cargo: 'Faxineiro', dataAdmissao: '2016-05-10' },
      { id: 9, clinicaId: 2, nome: 'Roberto Almeida', cpf: '789.012.345-00', dataNascimento: '1980-04-17', endereco: 'Rua I, 345', contato: '(11) 98765-4321', cargo: 'Seguranca', dataAdmissao: '2015-01-17' },
      { id: 10, clinicaId: 2, nome: 'Rafael Oliveira', cpf: '012.345.678-00', dataNascimento: '1997-08-28', endereco: 'Avenida J, 678', contato: '(21) 98765-4321', cargo: 'Seguranca', dataAdmissao: '2021-09-28' },
    ])
  }
}