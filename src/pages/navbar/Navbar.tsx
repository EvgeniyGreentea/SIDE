import React, { FC } from 'react'
import style from "./Navbar.module.css"
import { useNavigate } from 'react-router'
import { RouteNames } from '../../route'

const Navbar: FC = () => {
    const router = useNavigate()

    return (
        <div className={style.navbar}>
            <button
                onClick={() => router(RouteNames.MAIN)}
                className={style.li}>
                Главная
            </button>
            <button
                onClick={() => router(RouteNames.PROFILE)}
                className={style.li}>
                Профиль
            </button>
            <button
                onClick={() => router(RouteNames.LOGOUT)}
                className={style.li}>
                Регистрация
            </button>
            <button
                onClick={() => router(RouteNames.LOGIN)}
                className={style.li}>
                войти
            </button>
        </div>
    )
}

export default Navbar