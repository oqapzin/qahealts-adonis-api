import Paciente from '#models/paciente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Paciente.createMany([
      { id: 1, nome: 'Maria Silva', cpf: '123.456.789-00', contato: '(11) 98765-4321', dataNascimento: '1990-05-15', endereco: 'Rua A, 123', clinicaId: 1 },
      { id: 2, nome: 'João Oliveira', cpf: '987.654.321-00', contato: '(21) 98765-4321', dataNascimento: '1985-10-20', endereco: 'Avenida B, 456', clinicaId: 2 },
      { id: 3, nome: 'Ana Santos', cpf: '456.789.012-00', contato: '(31) 98765-4321', dataNascimento: '1978-03-25', endereco: 'Rua C, 789', clinicaId: 3 },
      { id: 4, nome: 'Pedro Lima', cpf: '789.012.345-00', contato: '(41) 98765-4321', dataNascimento: '1995-12-10', endereco: 'Rua D, 321', clinicaId: 4 },
      { id: 5, nome: 'Mariana Costa', cpf: '321.654.987-00', contato: '(11) 98765-4321', dataNascimento: '1983-08-12', endereco: 'Rua E, 567', clinicaId: 1 },
      { id: 6, nome: 'Lucas Pereira', cpf: '654.987.123-00', contato: '(21) 98765-4321', dataNascimento: '1992-04-05', endereco: 'Avenida F, 890', clinicaId: 2 },
      { id: 7, nome: 'Carla Souza', cpf: '987.123.456-00', contato: '(31) 98765-4321', dataNascimento: '1989-11-30', endereco: 'Rua G, 234', clinicaId: 3 },
      { id: 8, nome: 'Gustavo Santos', cpf: '456.789.012-00', contato: '(41) 98765-4321', dataNascimento: '1975-07-22', endereco: 'Avenida H, 901', clinicaId: 4 },
      { id: 9, nome: 'Amanda Ferreira', cpf: '789.012.345-00', contato: '(11) 98765-4321', dataNascimento: '1980-01-17', endereco: 'Rua I, 345', clinicaId: 1 },
      { id: 10, nome: 'Rafaela Lima', cpf: '012.345.678-00', contato: '(21) 98765-4321', dataNascimento: '1997-09-28', endereco: 'Avenida J, 678', clinicaId: 2 },
      { id: 11, nome: 'Roberto Almeida', cpf: '345.678.901-00', contato: '(31) 98765-4321', dataNascimento: '1987-06-03', endereco: 'Rua K, 123', clinicaId: 3 },
      { id: 12, nome: 'Camila Oliveira', cpf: '678.901.234-00', contato: '(41) 98765-4321', dataNascimento: '1994-02-14', endereco: 'Avenida L, 456', clinicaId: 4 },
    ])  
  }
}