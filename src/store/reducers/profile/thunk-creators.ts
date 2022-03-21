
import { AppDispatch } from '../..';
import UserService from '../../../api/UserService';
import ProfileActionCreators from './action-creators';



export const ProfileThunkCreators = {

    fetchProfile: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getProfile()
            dispatch(ProfileActionCreators.setProfile(response.data))
        } catch (e) {
            console.log(e)
        }
    },
}