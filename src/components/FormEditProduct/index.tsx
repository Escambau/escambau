import EditProductSchema from "../../validations/EditProductSchema";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { IProduct, ProductContext } from "../../contexts/ProductContext";
import { CurrentContext } from "../../contexts/CurrentContext";
import { useNavigate } from "react-router-dom";

const FormEditProduct = () => {
  const { editProduct } = useContext(ProductContext);
  const { productToEdit } = useContext(ProductContext);
  const navigate = useNavigate()
  const { setEditProductUrl } = useContext(CurrentContext);

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
            defaultValue={productToEdit ? `${productToEdit.image}` : ""}
            placeholder="Envie sua imagem"
            {...register("image")}
            onChange={(e) => setEditProductUrl(e.target.value)}
          />
          {<span>{errors.image?.message}</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="name">Nome:</label>
          <input
            className="input-standard"
            id="name"
            type="string"
            defaultValue={productToEdit ? `${productToEdit.name}` : ""}
            placeholder="Nome do produto"
            {...register("name")}
          />
          {<span>{errors.name?.message}</span>}
        </fieldset>

        <div className="price-and-category">
          <fieldset>
            <label htmlFor="price">Preço:</label>
            <div className="price">
              <p>R$</p>
              <input
                className="input-price"
                id="price"
                type="string"
                defaultValue={productToEdit ? `${productToEdit.price}` : ""}
                placeholder="Preço do produto"
                {...register("price")}
              ></input>
            </div>

            {<span>{errors.price?.message}</span>}
          </fieldset>

          <fieldset>
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              {...register("category")}
              defaultValue={productToEdit ? `${productToEdit.category}` : ""}
            >
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
            defaultValue={productToEdit ? `${productToEdit.preferences}` : ""}
            placeholder="Suas preferências de troca aqui"
            {...register("preferences")}
          />
          {<span>{errors.preferences?.message}</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="description">Descrição do produto:</label>
          <textarea
            id="description"
            defaultValue={productToEdit ? `${productToEdit.description}` : ""}
            placeholder="Descreva seu item aqui"
            {...register("description")}
          />
          {<span>{errors.description?.message}</span>}
        </fieldset>

        <div className="buttons">
          <button type="submit" className="save-button">
            Salvar
          </button>
          <button type="submit" className="cancel-button" onClick={() => navigate("/profile")}>
            Cancelar
          </button>
        </div>
      </form>
    </Container>
  );
};

export default FormEditProduct;
