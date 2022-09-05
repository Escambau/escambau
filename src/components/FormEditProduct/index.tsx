import EditProductSchema from "../../validations/EditProductSchema";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { IProduct, ProductContext } from "../../contexts/ProductContext";

const FormEditProduct = () => {
  const { editProduct } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({ resolver: yupResolver(EditProductSchema) });

  return (
    <Container>
      <form
        className="form-main"
        noValidate={true}
        onSubmit={handleSubmit(editProduct)}
      >
        <fieldset>
          <label htmlFor="image">URL da Imagem:</label>
          <input
            className="input-standard"
            id="image"
            type="url"
            placeholder="Envie sua imagem"
            {...register("image")}
          />
          {<span>{errors.image?.message}</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="name">Nome:</label>
          <input
            className="input-standard"
            id="name"
            type="string"
            placeholder="Nome do produto"
            {...register("name")}
          />
          {<span>{errors.name?.message}</span>}
        </fieldset>

        <div className="price-and-category">
          <fieldset>
            <label htmlFor="price">Preço:</label>
            <form className="price">
              <p>R$</p>
              <input
                className="input-price"
                id="price"
                type="string"
                placeholder="Preço do produto"
                {...register("price")}
              ></input>
            </form>

            {<span>{errors.price?.message}</span>}
          </fieldset>

          <fieldset>
            <label htmlFor="category">Categoria</label>
            <select id="category" {...register("category")}>
              <option selected disabled>
                Selecione uma categoria
              </option>
              <option value="Eletrônicos e Eletrodomésticos">
                Eletrônicos e Eletrodomésticos
              </option>
              <option value="Roupas">Roupas</option>
              <option value="Brinquedos">Brinquedos</option>
              <option value="Untensílios Domésticos">
                Untensílios Domésticos
              </option>
              <option value="Automotivos">Automotivos</option>
              <option value="Instrumentos Musicais">
                Instrumentos Musicais
              </option>
              <option value="Decoração">Decoração</option>
              <option value="Entretenimento">Entretenimento</option>
              <option value="Pets">Pets</option>
            </select>
            {<span>{errors.category?.message}</span>}
          </fieldset>
        </div>

        <fieldset>
          <label htmlFor="preferences">Preferências de troca:</label>
          <textarea
            id="preferences"
            placeholder="Suas preferências de troca aqui"
            {...register("preferences")}
          />
          {<span>{errors.preferences?.message}</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="description">Descrição do produto:</label>
          <textarea
            id="description"
            placeholder="Descreva seu item aqui"
            {...register("description")}
          />
          {<span>{errors.description?.message}</span>}
        </fieldset>

        <div className="buttons">
          <button type="submit" className="save-button">
            Salvar
          </button>
          <button type="submit" className="cancel-button">
            Cancelar
          </button>
        </div>
      </form>
    </Container>
  );
};

export default FormEditProduct;
