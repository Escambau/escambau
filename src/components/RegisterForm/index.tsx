import { useForm } from "react-hook-form";
import { IRegister, UserContext } from "../../contexts/UserContext";
import { Section, Form } from "./style";
import RegisterImage from "../../assets/RegisterImage.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUserSchema } from "../../validations/registerUser";
import { useContext } from "react";
import HeaderRegister from "../HeaderRegister";

const RegisterForm = () => {
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
      {/* Teste de Commit */}
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

          <Form onSubmit={handleSubmit(onSubmitRegister)}>
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
                  placeholder="Cidade"
                  {...register("cidade")}
                />
                <span className="error">{errors.cidade?.message}</span>
              </div>

              <div className="endereco-child-estado">
                <label>Estado:</label>
                <select {...register("estado")}>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
              <span className="error">{errors.estado?.message}</span>
            </div>

            <div className="dadosPessoais">
              <div className="dados-child-cpf">
                <label>CPF:</label>
                <input
                  type="text"
                  className="inputSmall"
                  placeholder="CPF"
                  {...register("cpf")}
                />
                <span className="error">{errors.cpf?.message}</span>
              </div>

              <div className="dados-child-idade">
                <label>Idade:</label>
                <input
                  type="number"
                  className="inputSmall"
                  placeholder="Idade"
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

export default RegisterForm;

