import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import Header from "../../components/UserDashboard/Header";
import { ContainerAddProduct } from "./style";
import mobile from "../../assets/mobileShop.png";
import { addProductSchema } from "../../validations/AddProductSchema";
import { IProduct, ProductContext } from "../../contexts/ProductContext";
import { UserContext } from "../../contexts/UserContext";
import { HeaderUnlogged } from "../../components/HeaderUnlogged/Header";

//
export function AddProduct() {
  const { addNewProduct } = useContext(ProductContext);
  const { token, redirectToProfile } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(addProductSchema),
  });

  return (
    <>
      {token ? <Header /> : <HeaderUnlogged />}
      <ContainerAddProduct>
        <div className="box-header">
          <button onClick={() => redirectToProfile()}>Meu Perfil</button>
          <h2>Adicionar Produto</h2>
        </div>

        <section>
          <section className="section-main">
            <div className="apresenting-space">
              <article>
                <p>Aqui sempre tem um achado exclusivo para chamar de seu.</p>
                <p>A gente faz o escambo por você.</p>
              </article>
              <figure>
                <img src={mobile} alt="LogoAdd" />
              </figure>
            </div>
            <form className="main-form" onSubmit={handleSubmit(addNewProduct)}>
              <div>
                <label>Url da imagem:</label>
                <input
                  className="input-standard"
                  type="url"
                  placeholder="Digite a url da imagem aqui..."
                  {...register("image")}
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
                    <option value="Utensílios Domésticos">
                      Utensílios Domésticos
                    </option>
                    <option value="Automotivos">Automotivos</option>
                    <option value="Instrumentos Musicais">
                      Instrumentos Musicais
                    </option>
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
            </form>
          </section>
        </section>
      </ContainerAddProduct>
    </>
  );
}
