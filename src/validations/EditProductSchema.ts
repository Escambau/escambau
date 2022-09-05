import * as yup from "yup";

const EditProductSchema = yup.object().shape({
  image: yup.string().required("URL obrigatória"),
  name: yup.string().required("Nome obrigatório"),
  price: yup.string().required("Preço obrigatório"),
  category: yup.string().required("Categoria obrigatória"),
  preferences: yup.string().required("Preferências obrigatórias"),
  description: yup.string().required("Descrição obrigatória"),
});
export default EditProductSchema;
