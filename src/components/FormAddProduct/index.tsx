import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductSchema } from "../../validations/AddProductSchema";
import { ProductContext } from "../../contexts/ProductContext";
import { IProduct } from "../../contexts/ProductContext";
import { FormAdd } from "./style";
import { CurrentContext } from "./../../contexts/CurrentContext";

export const FormAddProduct = () => {
  const { addNewProduct } = useContext(ProductContext);
  const { setProductUrl } = useContext(CurrentContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(addProductSchema),
  });

  return (
    <FormAdd noValidate={true} onSubmit={handleSubmit(addNewProduct)}>
      <div>
        <label>Url da imagem:</label>
        <input
          className="input-standard"
          type="url"
          placeholder="Digite a url da imagem aqui..."
          {...register("image")}
          onChange={(e) => setProductUrl(e.target.value)}
        />
        <span>{errors?.image?.message}</span>
      </div>
      <div>
        <label>Nome:</label>
        <input
          className="input-standard"
          type="text"
          placeholder="Digite o nome do produto aqui..."
          {...register("name")}
        />
        <span>{errors.name?.message}</span>
      </div>
      <div className="box-price-category">
        <fieldset>
          <label>Preço:</label>
          <div className="price">
            <p>R$</p>
            <input
              className="input-price"
              id="price"
              type="string"
              placeholder="Preço do produto"
              {...register("price")}
            ></input>
          </div>
          <span>{errors.price?.message}</span>
        </fieldset>
        <div className="select-on">
          <label>Categoria:</label>
          <select {...register("category")}>
            <option value="Eletrônicos e Eletrodomésticos">
              Eletrônicos e Eletrodomésticos
            </option>
            <option value="Roupas">Roupas</option>
            <option value="Brinquedos">Brinquedos</option>
            <option value="Utensílios domésticos">Utensílios Domésticos</option>
            <option value="Automotivos">Automotivos</option>
            <option value="Instrumentos musicais">Instrumentos Musicais</option>
            <option value="Decoração">Decoração</option>
            <option value="Entretenimento">Entretenimento</option>
            <option value="Pets">Pets</option>
          </select>
          <span></span>
        </div>
      </div>

      <div>
        <label>Preferências de troca:</label>
        <textarea
          placeholder="Digite suas preferências de troca..."
          {...register("preferences")}
        />
        <span>{errors.preferences?.message}</span>
      </div>
      <div className="description">
        <label>Descrição:</label>

        <textarea
          placeholder="Digite a descrição do produto aqui..."
          {...register("description")}
        />
        <span>{errors.description?.message}</span>
      </div>

      <button type="submit">Adicionar</button>
    </FormAdd>
  );
};
