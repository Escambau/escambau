import { useForm } from "react-hook-form";
import { IRegister } from "../../contexts/UserContext";
import { Section, Form } from "./style";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<IRegister>();

  return (
    <Section>
      <h2>Cadastre-se</h2>
      <Form>
        <label>Nome completo:</label>
        <input
          type="text"
          placeholder="Digite o seu nome aqui"
          {...register("name")}
        />

        <label>E-mail:</label>
        <input
          type="email"
          placeholder="Digite o seu e-mail aqui"
          {...register("email")}
        />

        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite a sua senha aqui"
          {...register("password")}
        />

        <label>Confirmar senha:</label>
        <input
          type="password"
          placeholder="Confirme a sua senha aqui"
          {...register("confirmPassword")}
        />

        <div className="endereco">
          <label>Cidade:</label>
          <input
            className="inputSmall"
            type="text"
            placeholder="Digite a sua cidade aqui"
            {...register("cidade")}
          />

          <label>Estado:</label>
          <input
            type="text"
            className="inputSmall"
            placeholder="Digite a sua cidade aqui"
            {...register("estado")}
          />
        </div>

        <div className="dadosPessoais">
          <label>CPF:</label>
          <input
            type="number"
            className="inputSmall"
            placeholder="Digite o seu CPF aqui"
            {...register("cpf")}
          />

          <label>Idade:</label>
          <input
            type="number"
            className="inputSmall"
            placeholder="Digite a sua idade aqui"
            {...register("idade")}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </Form>
    </Section>
  );
};

export default RegisterForm;
