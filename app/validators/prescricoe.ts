import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messagesProvider = new SimpleMessagesProvider({
    'required': 'O campo {{ field }} é obrigatório',
    'string': 'O valor do campo {{ field }} precisa ser uma string.',
    'number': 'O valor do campo {{ field }} precisa ser um número.',
    'unsigned': 'O valor do campo {{ field }} não pode ser negativo.',
    'maxLength': 'O campo {{ field }} deve ter no máximo {{max}} caracteres.',
    'minLength': 'O campo {{ field }} deve ter no mínimo {{min}} caracteres.'
})


export const createPrescricaoValidator = vine.compile(
    vine.object({
        descricao: vine.string().trim().minLength(10),
        data: vine.string().trim(),
        consultaId: vine.number({ strict: true }).withoutDecimals(),
        medicoId: vine.number({ strict: true }).withoutDecimals(),
    })
);

createPrescricaoValidator.messagesProvider = messagesProvider

export const UpdatePrescricoesValidator = vine.compile(
    vine.object({
        descricao: vine.string().trim().minLength(10).optional(),
        data: vine.string().trim().optional(),
        consultaId: vine.number({ strict: true }).withoutDecimals().optional(),
        medicoId: vine.number({ strict: true }).withoutDecimals().optional(),
    })
);

UpdatePrescricoesValidator.messagesProvider = messagesProvider