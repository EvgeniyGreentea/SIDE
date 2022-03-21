import React from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router'
import { RouteNames } from '../../route'
export const Login = () => {

  const router = useNavigate()
  return (
    <div className={style.container}>
      <label ><b>Email</b></label>
      <input className={style.input} type="text" placeholder="Введите вашу почту" name="email" required />

      <label><b>Пароль</b></label>
      <input className={style.input} type="password" placeholder="Введите пароль" name="psw" required />

      <label><b>Повторить пароль</b></label>
      <input className={style.input} type="password" placeholder="Повторите пароль" name="psw-repeat" required />
      
      <button
        onClick={() => router(RouteNames.LOGOUT)}
        className={style.button}
        type="submit"
      >
        Регистрация
      </button>
    </div>
  )
}
