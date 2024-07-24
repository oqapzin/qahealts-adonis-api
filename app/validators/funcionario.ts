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

export const createFuncionarioValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().minLength(3).maxLength(50),
        cpf: vine.string().trim().minLength(11).maxLength(15),
        dataNascimento: vine.string().trim(),
        endereco: vine.string().trim().minLength(4).maxLength(50),
        contato: vine.string().trim().minLength(9).maxLength(15),
        cargo: vine.string().trim().minLength(2).maxLength(25),
        dataAdmissao: vine.string().trim(),
        clinicaId: vine.number({ strict: true }).withoutDecimals(),
        crm: vine.string().trim().regex(/^\d{6}crm$/).optional().requiredWhen('cargo','=','Medico'),
        especialidadeId: vine.number({ strict: true }).withoutDecimals().optional().requiredWhen('cargo','=','Medico'),
    })
);

createFuncionarioValidator.messagesProvider = messagesProvider

export const UpdateFuncionarioValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().minLength(3).maxLength(50).optional(),
        cpf: vine.string().trim().minLength(11).maxLength(15).optional(),
        dataNascimento: vine.string().trim().optional(),
        endereco: vine.string().trim().minLength(4).maxLength(50).optional(),
        contato: vine.string().trim().minLength(9).maxLength(15).optional(),
        cargo: vine.string().trim().minLength(2).maxLength(25).optional(),
        clinicaId: vine.number({ strict: true }).withoutDecimals().nullable(),
        dataAdmissao: vine.string().trim().optional(),
        crm: vine.string().trim().regex(/^\d{6}crm$/).optional(),
        especialidadeId: vine.number({ strict: true }).withoutDecimals().nullable().optional(),
    })
);

UpdateFuncionarioValidator.messagesProvider = messagesProvider
