import React from 'react'
import { validationEmail } from '../../helpers/validationEmail'
import { UseAuth } from './useAuth'
import TextField from '@mui/material/TextField'

import styles from './login.module.scss'
import { styled } from '@mui/styles'



const Login: React.FC = () => {

  const { registerInput, handleSubmit, errors, onSubmit } = UseAuth()

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.loginForm}>
          <h2>Вход</h2>

          <TextField
            {...registerInput("email", {
              required: "Обязательное поле!",
              pattern: {
                value: validationEmail,
                message: "Введите e-mail!"
              }
            }
            )}
            color='success'
            id="outlined-basic"
            label="Email"
            variant="outlined" />

          {errors.email && <div style={{ color: "red" }}>{errors.email.message}</div>}

          <TextField
            {...registerInput("password", {
              required: "Обязательное поле!",
              minLength: {
                value: 3,
                message: "Минимальная длинна пароля 3 символа"
              }
            }
            )}
            color='success'
            id="outlined-basic"
            label="Password"
            variant="outlined" />

          {errors.password && <div style={{ color: "red" }}>{errors.password.message}</div>}

          <button type='submit'>Войти</button>

        </div>
      </form>
    </div>
  )
}

export default Login