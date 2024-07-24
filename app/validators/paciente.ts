import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messagesProvider = new SimpleMessagesProvider({
    'required': 'O campo {{ field }} é obrigatório',
    'string': 'O valor do campo {{ field }} precisa ser uma string.',
    'number': 'O valor do campo {{ field }} precisa ser um número.',
    'unsigned': 'O valor do campo {{ field }} não pode ser negativo.',
    'maxLength': 'O campo {{ field }} deve ter no máximo {{max}} caracteres.',
    'minLength': 'O campo {{ field }} deve ter no mínimo {{min}} caracteres.'
})

export const createPacienteValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().minLength(3).maxLength(50),
        cpf: vine.string().trim().minLength(11).maxLength(15),
        contato: vine.string().trim().minLength(9).maxLength(15),
        dataNascimento: vine.string().trim(),
        endereco: vine.string().trim().minLength(4).maxLength(50),
        clinica_id: vine.number({ strict: true }).withoutDecimals(),
    })
);

createPacienteValidator.messagesProvider = messagesProvider

export const UpdatePacienteValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().minLength(3).maxLength(50).optional(),
        cpf: vine.string().trim().minLength(11).maxLength(15).optional(),
        contato: vine.string().trim().minLength(9).maxLength(15).optional(),
        dataNascimento: vine.string().trim().optional(),
        endereco: vine.string().trim().minLength(4).maxLength(50).optional(),
        clinica_id: vine.number({ strict: true }).withoutDecimals().optional(),
    })
);

UpdatePacienteValidator.messagesProvider = messagesProvider
