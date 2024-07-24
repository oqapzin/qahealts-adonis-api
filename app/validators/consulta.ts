import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messagesProvider = new SimpleMessagesProvider({
    'required': 'O campo {{ field }} é obrigatório',
    'string': 'O valor do campo {{ field }} precisa ser uma string.',
    'number': 'O valor do campo {{ field }} precisa ser um número.',
    'unsigned': 'O valor do campo {{ field }} não pode ser negativo.',
    'maxLength': 'O campo {{ field }} deve ter no máximo {{max}} caracteres.',
    'minLength': 'O campo {{ field }} deve ter no mínimo {{min}} caracteres.'
})


export const createConsultaValidator = vine.compile(
    vine.object({
        dataHora: vine.string().trim(),
        clinicaId: vine.number({ strict: true }).withoutDecimals(),
        pacienteId: vine.number({ strict: true }).withoutDecimals(),
        medicoId: vine.number({ strict: true }).withoutDecimals(),
        tipoPagamentoId: vine.number({ strict: true }).withoutDecimals(),
        especialidadeId: vine.number({ strict: true }).withoutDecimals()
    })
);

createConsultaValidator.messagesProvider = messagesProvider

export const UpdateConsultaValidator = vine.compile(
    vine.object({
        dataHora: vine.string().trim().optional(),
        clinicaId: vine.number({ strict: true }).withoutDecimals().optional(),
        pacienteId: vine.number({ strict: true }).withoutDecimals().optional(),
        medicoId: vine.number({ strict: true }).withoutDecimals().optional(),
        tipoPagamentoId: vine.number({ strict: true }).withoutDecimals().optional(),
        especialidadeId: vine.number({ strict: true }).withoutDecimals().optional(),
    })
);

UpdateConsultaValidator.messagesProvider = messagesProvider
