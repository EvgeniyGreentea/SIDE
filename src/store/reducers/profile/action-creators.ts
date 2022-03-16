
import { AppDispatch } from '../..';
import UserService from '../../../api/UserService';
import { IProfile } from './../../../models/IProfile';

import { EventActionEnum, SetProfileAction } from "./types";


export const ProfileActionCreators = {

    setProfile: (payload: IProfile[]): SetProfileAction => ({ type: EventActionEnum.SET_PROFILE, payload }),
    
    fetchProfile: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getProfile()
            dispatch(ProfileActionCreators.setProfile(response.data))
        } catch (e) {
            console.log(e)
        }
    },
}