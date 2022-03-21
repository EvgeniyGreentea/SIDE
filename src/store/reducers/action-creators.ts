import AuthActionCreators from './auth/action-creators';
import { AuthThunkCreators } from './auth/thunk-creators';
import { ProfileThunkCreators } from './profile/thunk-creators';

export const allThunkCreators = {
    ...ProfileThunkCreators,
    ...AuthThunkCreators,
    ...AuthActionCreators

}