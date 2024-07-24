import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messagesProvider = new SimpleMessagesProvider({
    'required': 'O campo {{ field }} é obrigatório',
    'string': 'O valor do campo {{ field }} precisa ser uma string.',
    'number': 'O valor do campo {{ field }} precisa ser um número.',
    'unsigned': 'O valor do campo {{ field }} não pode ser negativo.',
    'maxLength': 'O campo {{ field }} deve ter no máximo {{max}} caracteres.',
    'minLength': 'O campo {{ field }} deve ter no mínimo {{min}} caracteres.',
    'crm.regex': 'O valor do campo {{ field }} deve seguir o padrão de 6 números e a palavra crm. Ex.: 123456crm.'
})

export const createMedicoValidator = vine.compile(
    vine.object({
        funcionarioId: vine.number({ strict: true }).withoutDecimals(),
        especialidadeId: vine.number({ strict: true }).withoutDecimals(),
        crm: vine.string().trim().regex(/^\d{6}crm$/),
    })
);

createMedicoValidator.messagesProvider = messagesProvider

export const UpdateMedicoValidator = vine.compile(
    vine.object({
        crm: vine.string().trim().regex(/^\d{6}crm$/),
        funcionarioId: vine.number({ strict: true }).withoutDecimals(),
        especialidadeId: vine.number({ strict: true }).withoutDecimals(),
    })
);

UpdateMedicoValidator.messagesProvider = messagesProvider
