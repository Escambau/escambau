import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Header from '../UserDashboard/Header';
import { ContainerAddProduct } from './style';
import  mobile from "../../assets/mobileShop.png"


export function AddProduct() {
  const {} = useContext(UserContext);

  const formSchema = yup.object().shape({

  })

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm ({
    resolver: yupResolver(formSchema)
  })

  return(
    <>
      <Header />
      <ContainerAddProduct>

        <div className='box-header'>
          <button>Meu Perfil</button>
          <h2>Adicionar Produto</h2>
        </div>

        <section>

          <section className='section-main'>
            <div className='apresenting-space'>
              <article>
                <p>Aqui sempre tem um achado exclusivo para chamar de seu.</p>
                <p>A gente faz o escambo por você.</p>
              </article>
              <figure>
                <img src={mobile} alt="LogoAdd" />
              </figure>
            </div>
              <form>
                <div>
                  <label >Url da imagem</label>
                  <input type="url" 
                  placeholder='Digite a url da imagem aqui...'
                  />
                  <span></span>
                </div>
                <div>
                  <label >Nome</label>
                  <input type="text" 
                  placeholder='Digite o nome do produto aqui...'
                  />
                  <span></span>
                </div>

                <div className='box-price-category'>
                  <div className='input-on'>
                    <label >Preço</label>
                    <input type="text" 
                    placeholder='Digite o preço...'
                    />
                    <span></span>
                  </div>
                  <div className='select-on'>
                    <label >Categoria</label>
                    <select >
                      <option value="Eletrônicos">Eletrônicos</option>
                    </select>
                    <span></span>
                  </div>
                </div>

                <div>
                  <label >Preferências</label>
                  <input type="text" 
                  placeholder='Digite suas preferências de troca...'
                  />
                  <span></span>
                </div>
                <div className='description'>
                  <label >Descrição</label>
                  <textarea 
                  placeholder='Digite a descrição do produto aqui...'
                  />
                  <span></span>
                </div>

                <button type='submit'>Adicionar</button>
              </form>
            <div>

            </div>
          </section>
        </section>
      </ContainerAddProduct>
    </>
  ) 
}