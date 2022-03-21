import React, { useState } from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router'
import { useActions } from '../../hooks/useActions'
export const Login = () => {

  const router = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useActions()
  return (
    <div className={style.container}>
      <label ><b>Имя пользователя</b></label>
      <input
        className={style.input}
        type="text"
        value={username}
        onChange={e => setUsername(String(e.target.value))}
        placeholder="Введите имя пользователя"
        name="username"
      />
      <label><b>Пароль</b></label>
      <input
        className={style.input}
        value={password}
        onChange={e => setPassword(String(e.target.value))}
        placeholder="Введите пароль"
        name="password"
        required
      />

      <label><b>Повторить пароль</b></label>
      <input
        className={style.input}
        type="password"
        placeholder="Повторите пароль"
        name="psw-repeat"
        required
      />

      <div className={style.form_button}>
        <button
          onClick={()=>
            login(username, password)
          }
          className={style.button}
          type="submit"
        >
          Войти
        </button>
        <button
          onClick={() => router("../logout")}
          className={style.button}
          type="submit"
        >
          Регистрация
        </button>
      </div>
    </div>
  )
}
