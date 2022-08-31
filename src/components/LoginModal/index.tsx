import * as yup from 'yup';
import { useForm } from 'react-hook-form'; 
import { yupResolver } from '@hookform/resolvers/yup';
import { ModalLogin } from './style';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

interface ILoginForm { 
  email: string,
  password: string 
} 

export function LoginModal() { 

  const {isPasswordShow, viewPass} = useContext(UserContext)

  const formSchema = yup.object().shape({
    email:yup.string().required('Insira um e-mail!'),
    password: yup.string().required('Insira uma senha!')
  }); 

  const { 
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm<ILoginForm>({ 
    resolver: yupResolver(formSchema) 
  })

  return ( 
    <ModalLogin>
      <div className="box-login"> 

        <h2>Login</h2> 

        <form > 
          <div> 
            <label htmlFor="email"><h3>E-mail:</h3></label> 
            <input type="email" placeholder='Digite seu email aqui...' {...register('email')} /> 
            <span>{errors?.email?.message}</span>
          </div> 
          <div> 
            <label htmlFor="password"><h3>Senha:</h3></label> 
            <div>
              <input type={isPasswordShow ? "text" : "password"} placeholder='Digite sua senha aqui...' {...register('password')} />
              {isPasswordShow ? 
              <button onClick={viewPass}><IoEyeOutline/></button> 
              : 
              <button onClick={viewPass}><IoEyeOffOutline/></button>}
            </div>
            <span>{errors?.password?.message}</span>
          </div> 
          <button type='submit' className='enter-btn'>Entrar</button> 
        </form> 

        <div className='box-to-register'>
          <h3>Ainda não tem uma conta?</h3>
          <button>Cadastre-se</button> 
        </div>

      </div>
    </ModalLogin> 
  ) 
}