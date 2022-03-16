import { IProfile } from "../../../models/IProfile";



export interface EventState {
   profile : IProfile[];
}

export enum EventActionEnum {
    SET_PROFILE = 'SET_PROFILE'
}

export interface SetProfileAction {
    type: EventActionEnum.SET_PROFILE;
    payload: IProfile[];
}


export type EventAction = SetProfileAction 

   