import * as yup from "yup";

export const registerUserSchema = yup.object().shape({
  name: yup.string().required("Seu nome é obrigatório"),
  email: yup
    .string()
    .required("Seu email é obrigatório")
    .email("Forneça um email válido"),
  password: yup
    .string()
    .required("Sua senha é obrigatória")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caractere especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Suas senhas devem ser iguais"),
  cidade: yup.string().required("Sua cidade é obrigatória"),

  estado: yup
    .string()
    .required()
    .oneOf(
      [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
      ],
      "Selecione um estado"
    ),

  cpf: yup
    .string()
    .required("Seu CPF é obrigatório")
    .matches(/^[0-9]+$/, "Forneça apenas números")
    .min(11, "Forneça exatamente 11 digítos")
    .max(11, "Forneça exatamente 11 digítos"),

  idade: yup
    .number()
    .typeError("Sua idade é obrigatória")
    .required("Sua idade é obrigatória")
    .positive("Forneça apenas números positivos")
    .integer("Forneça apenas números inteiros"),
});
