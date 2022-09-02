import EditProductSchema from "../../validations/EditProductSchema";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const FormEditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EditProductSchema) });

  return (
    <Container>
      <form
        className="form-main"
        noValidate={true}
        //onSubmit={handleSubmit(editProduct)}
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
          {/* <p>{errors.imageUrl?.message}</p> */}
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
          {/* <p>{errors.name?.message}</p> */}
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

            {/* <p>{errors.price?.message}</p> */}
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
            {/* <p>{errors.category?.message}</p> */}
          </fieldset>
        </div>

        <fieldset>
          <label htmlFor="preferences">Preferências de troca:</label>
          <textarea
            id="preferences"
            placeholder="Suas preferências de troca aqui"
            {...register("preferences")}
          />
          {/* <p>{errors.preferences?.message}</p> */}
        </fieldset>

        <fieldset>
          <label htmlFor="description">Descrição do produto:</label>
          <textarea
            id="description"
            placeholder="Descreva seu item aqui"
            {...register("description")}
          />
          {/* <p>{errors.description?.message}</p> */}
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
