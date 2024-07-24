import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messagesProvider = new SimpleMessagesProvider({
    'required': 'O campo {{ field }} é obrigatório',
    'string': 'O valor do campo {{ field }} precisa ser uma string.',
    'number': 'O valor do campo {{ field }} precisa ser um número.',
    'unsigned': 'O valor do campo {{ field }} não pode ser negativo.',
    'maxLength': 'O campo {{ field }} deve ter no máximo {{max}} caracteres.',
    'minLength': 'O campo {{ field }} deve ter no mínimo {{min}} caracteres.'
})


export const createClinicaValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().minLength(4).maxLength(50),
        telefone: vine.string().trim().minLength(9).maxLength(15),
        endereco: vine.string().trim().minLength(4).maxLength(50),
        responsavel: vine.string().trim().minLength(4).maxLength(50),
    })
);

createClinicaValidator.messagesProvider = messagesProvider

export const updateClinicaValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().minLength(4).maxLength(50).optional(),
        telefone: vine.string().trim().minLength(9).maxLength(15).optional(),
        endereco: vine.string().trim().minLength(4).maxLength(50).optional(),
        responsavel: vine.string().trim().minLength(4).maxLength(50).optional(),
    })
);

updateClinicaValidator.messagesProvider = messagesProvider
