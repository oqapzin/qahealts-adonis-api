import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messagesProvider = new SimpleMessagesProvider({
    'required': 'O campo {{ field }} é obrigatório',
    'string': 'O valor do campo {{ field }} precisa ser uma string.',
    'number': 'O valor do campo {{ field }} precisa ser um número.',
    'unsigned': 'O valor do campo {{ field }} não pode ser negativo.',
    'maxLength': 'O campo {{ field }} deve ter no máximo {{max}} caracteres.',
    'minLength': 'O campo {{ field }} deve ter no mínimo {{min}} caracteres.'
})


export const createTipoPagamentoValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().minLength(4).maxLength(30),
    })
);

createTipoPagamentoValidator.messagesProvider = messagesProvider

export const UpdateTipoPagamentoValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().minLength(4).maxLength(30).optional(),
    })
);

UpdateTipoPagamentoValidator.messagesProvider = messagesProvider
