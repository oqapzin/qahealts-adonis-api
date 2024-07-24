/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ClinicasController from '#controllers/clinicas_controller'
import ConsultasController from '#controllers/consultas_controller'
import EspecialidadesController from '#controllers/especialidades_controller'
import FuncionariosController from '#controllers/funcionarios_controller'
import MedicosController from '#controllers/medicos_controller'
import PacientesController from '#controllers/pacientes_controller'
import PrescricoesController from '#controllers/prescricoes_controller'
import TipoPagamentosController from '#controllers/tipo_pagamentos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


router.resource('/clinicas', ClinicasController).apiOnly()
router.resource('/consultas', ConsultasController).apiOnly()
router.resource('/especialidades', EspecialidadesController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/medicos', MedicosController).apiOnly()
router.resource('/pacientes', PacientesController).apiOnly()
router.resource('/prescricoes', PrescricoesController).apiOnly()
router.resource('/tiposPagamento', TipoPagamentosController).apiOnly()