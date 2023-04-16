import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

import styles from './login.module.scss'
import { validationEmail } from '../../helpers/validationEmail'
import {useAuth} from './use.auth'

type InputFieldsType = {
  email: string
  password: string
}

const Login: React.FC = () => {

  const {login} = useAuth()

  const {register: registerInput, handleSubmit, formState: {errors}} = useForm<InputFieldsType>({
    mode: 'onChange'
  })

  const onSubmit = (data: InputFieldsType) => {
    login(data)
  }

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.loginForm}>
          <h2>Вход</h2>

          <div>
            <label htmlFor='email'>E-Mail:</label>
            <input
              {...registerInput("email", {
                required: "Обязательное поле!",
                pattern: {
                  value: validationEmail,
                  message: "Введите e-mail!"
                }
              }
              )}
              name='email'
              type='text'
              placeholder='Введите email'
            />
          </div>

          {errors.email && <div style={{color: "red"}}>{errors.email.message}</div>}

          <div><label htmlFor='password'>Пароль:</label>
            <input
              {...registerInput("password",{
                required: "Обязательное поле!",
                minLength: {
                  value: 3,
                  message: "Минимальная длинна пароля 3 символа"
                }
              }
              )}
              name='password'
              type='password'
              placeholder='Введите пароль'
            />
          </div>

          {errors.password && <div style={{color: "red"}}>{errors.password.message}</div>}

          <button type='submit'>Войти</button>
        </div>
      </form>
    </div>
  )
}

export default Login