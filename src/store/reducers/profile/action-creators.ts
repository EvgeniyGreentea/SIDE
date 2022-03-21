import { IProfile } from '../../../models/IProfile'
import { EventActionEnum, SetProfileAction } from './types'

const ProfileActionCreators =  {
    setProfile: (payload: IProfile[]): SetProfileAction => ({ type: EventActionEnum.SET_PROFILE, payload })
  
}

export default ProfileActionCreators