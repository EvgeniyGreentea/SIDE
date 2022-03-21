import React, { FC } from 'react'
import style from "./Navbar.module.css"
import { useNavigate } from 'react-router'
import { RouteNames } from '../../route'
import { useTypedSelector } from '../../hooks/useTupedSelector'
import { useActions } from '../../hooks/useActions'

const Navbar: FC = () => {
    const router = useNavigate()
    const { isAuth, user } = useTypedSelector(state => state.auth)
    const { logout } = useActions()
    return (
        <div className={style.navbar}>
            <button
                onClick={() => router(RouteNames.MAIN)}
                className={style.li}>
                Главная
            </button>
            {isAuth
                ? <>
                    <button
                        onClick={() => router(RouteNames.PROFILE)}
                        className={style.li}>
                        {user.username}
                    </button><button
                        onClick={logout}
                        className={style.li}>
                        выйти
                    </button>
                </>
                :
                <button
                    onClick={() => router(RouteNames.LOGIN)}
                    className={style.li}>
                    войти
                </button>
            }
            <button
                onClick={() => router(RouteNames.LOGOUT)}
                className={style.li}>
                Регистрация
            </button>

        </div>
    )
}

export default Navbar