import { useForm } from "react-hook-form";
import { IRegister, UserContext } from "../../contexts/UserContext";
import { Section, Form } from "./style";
import RegisterImage from "../../assets/escambauCadastro.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUserSchema } from "../../validations/registerUser";
import { useContext } from "react";
import HeaderRegister from "../HeaderRegister";

const FormRegisterUser = () => {
  const { onSubmitRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(registerUserSchema),
  });

  return (
    <>
      <HeaderRegister />
      <Section>
        <div className="background">
          <div className="infoInicial">
            <div className="texto">
              <h2 className="fraseAzul">
                Sabe aquele objeto que está sem uso há muito tempo?
              </h2>
              <p className="fraseVerde">Alguém pode precisar dele.</p>
            </div>
            <img src={RegisterImage} alt="imagem registro" />
          </div>

          <Form noValidate={true} onSubmit={handleSubmit(onSubmitRegister)}>
            <h3>Cadastre-se</h3>
            <div className="form-field">
              <label>Nome completo:</label>
              <input
                type="text"
                placeholder="Digite o seu nome"
                {...register("name")}
              />
              <span className="error">{errors.name?.message}</span>
            </div>

            <div className="form-field">
              <label>E-mail:</label>
              <input
                type="email"
                placeholder="Digite o seu e-mail"
                {...register("email")}
              />
              <span className="error">{errors.email?.message}</span>
            </div>

            <div className="form-field">
              <label>Senha:</label>
              <input
                type="password"
                placeholder="Digite a sua senha"
                {...register("password")}
              />
              <span className="error">{errors.password?.message}</span>
            </div>

            <div className="form-field">
              <label>Confirmar senha:</label>
              <input
                type="password"
                placeholder="Confirme a sua senha"
                {...register("confirmPassword")}
              />
              <span className="error">{errors.confirmPassword?.message}</span>
            </div>

            <div className="endereco">
              <div className="endereco-child-cidade">
                <label>Cidade:</label>
                <input
                  className="inputSmall"
                  type="text"
                  placeholder="Digite a sua cidade"
                  {...register("cidade")}
                />
                <span className="error">{errors.cidade?.message}</span>
              </div>

              <div className="endereco-child-estado">
                <label>Estado:</label>
                <select {...register("estado")}>
                  <option disabled selected>
                    Selecione
                  </option>
                  <option>Acre</option>
                  <option>Alagoas</option>
                  <option>Amapá</option>
                  <option>Amazonas</option>
                  <option>Bahia</option>
                  <option>Ceará</option>
                  <option>Distrito Federal</option>
                  <option>Espírito Santo</option>
                  <option>Goiás</option>
                  <option>Maranhão</option>
                  <option>Mato Grosso</option>
                  <option>Mato Grosso do Sul</option>
                  <option>Minas Gerais</option>
                  <option>Pará</option>
                  <option>Paraíba</option>
                  <option>Paraná</option>
                  <option>Pernambuco</option>
                  <option>Piauí</option>
                  <option>Rio de Janeiro</option>
                  <option>Rio Grande do Norte</option>
                  <option>Rio Grande do Sul</option>
                  <option>Rondônia</option>
                  <option>Roraima</option>
                  <option>Santa Catarina</option>
                  <option>São Paulo</option>
                  <option>Sergipe</option>
                  <option>Tocantins</option>
                </select>
                <span className="error">{errors.estado?.message}</span>
              </div>
            </div>

            <div className="dadosPessoais">
              <div className="dados-child-cpf">
                <label>CPF:</label>
                <input
                  type="text"
                  className="inputSmall"
                  placeholder="Digite o seu CPF"
                  {...register("cpf")}
                />
                <span className="error">{errors.cpf?.message}</span>
              </div>

              <div className="dados-child-idade">
                <label>Idade:</label>
                <input
                  id="inputIdade"
                  type="number"
                  className="inputSmall"
                  placeholder="Digite a sua idade"
                  {...register("idade")}
                />
                <span className="error">{errors.idade?.message}</span>
              </div>
            </div>

            <button type="submit">Cadastrar</button>
          </Form>
        </div>
      </Section>
    </>
  );
};

export default FormRegisterUser;
