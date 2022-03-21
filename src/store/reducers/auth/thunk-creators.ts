
import { IUser } from '../../../models/IUser';
import UserService from '../../../api/UserService';
import AuthActionCreators from './action-creators';
import { AppDispatch } from '../..';


export const AuthThunkCreators = {
    
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await UserService.getUsers();
                const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setUser(mockUser));
                    dispatch(AuthActionCreators.setIsAuth(true));
                } else {
                    dispatch(AuthActionCreators.setError('Некорректный логин или пороль'))
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 500)
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false));

    }
}