import * as yup from "yup";
const EditProductSchema = yup.object().shape({
  image: yup.string().required("URL obrigatória"),
  name: yup.number().required("Nome obrigatório"),
  price: yup
    .string()
    .matches(/[+-]?([0-9]*[.])/, "Deve conter apenas números e pontos")
    .min(8, "No mínimo 8 caracteres")
    .required("Senha obrigatória"),
  category: yup.string().required("Categoria obrigatória"),
  preferences: yup.string().required("Preferências obrigatórias"),
  description: yup.string().required("Preferências obrigatórias"),
});
export default EditProductSchema;
