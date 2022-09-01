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
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Suas senhas devem ser iguais"),
  cidade: yup.string().required("Sua cidade é obrigatória"),
  estado: yup.string().ensure().nullable().required("Seu estado é obrigatório"),
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
    .positive()
    .integer(),
});
