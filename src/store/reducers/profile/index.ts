import { EventAction, EventActionEnum, EventState } from "./types";


const initialState: EventState = {
    profile: [
        {
            level: '1',
            discription: 'Иди вперед'
        }
    ]
    
}

export default function ProfileReducer(state = initialState, action:EventAction): EventState {
    switch (action.type) {
        case EventActionEnum.SET_PROFILE:
            return {...state, profile: action.payload}
        
        default:
            return state;

    }

}