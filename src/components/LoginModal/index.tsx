import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalLogin } from "./style";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useContext } from "react";
import { ILogin, UserContext } from "../../contexts/UserContext";
import { motion } from "framer-motion";
export function LoginModal() {
  const { isPasswordShow, viewPass, navigate, onSubmitLogin } =
    useContext(UserContext);
  const { setIsModalLogin, isModalLogin } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Seu email é obrigatório"),
    password: yup.string().required("Sua senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      {isModalLogin && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ModalLogin>
            <div className="box-login">
              <div className="btn-exit">
                <button onClick={() => setIsModalLogin(false)}>x</button>
              </div>
              <h2>Login</h2>

              <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div>
                  <label htmlFor="email">
                    <h3>E-mail:</h3>
                  </label>
                  <input
                    type="email"
                    placeholder="Digite seu email aqui..."
                    {...register("email")}
                  />
                  <span>{errors?.email?.message}</span>
                </div>
                <div>
                  <label htmlFor="password">
                    <h3>Senha:</h3>
                  </label>
                  <div>
                    <input
                      type={isPasswordShow ? "text" : "password"}
                      placeholder="Digite sua senha aqui..."
                      {...register("password")}
                    />
                    {isPasswordShow ? (
                      <button type="button" onClick={viewPass}>
                        <IoEyeOutline />
                      </button>
                    ) : (
                      <button type="button" onClick={viewPass}>
                        <IoEyeOffOutline />
                      </button>
                    )}
                  </div>
                  <span>{errors?.password?.message}</span>
                </div>
                <button type="submit" className="enter-btn">
                  Entrar
                </button>
              </form>

              <div className="box-to-register">
                <h3>Ainda não tem uma conta?</h3>
                <button
                  onClick={() => {
                    setIsModalLogin(false);
                    navigate("/register", { replace: true });
                  }}
                >
                  Cadastre-se
                </button>
              </div>
            </div>
          </ModalLogin>
        </motion.div>
      )}
    </>
  );
}
