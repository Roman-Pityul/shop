import React from 'react'

import styles from './login.module.scss'
import { validationEmail } from '../../helpers/validationEmail'
import {useAuth} from './use.auth'

const Login: React.FC = () => {

  const { registerInput, handleSubmit, errors, onSubmit} = useAuth()

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