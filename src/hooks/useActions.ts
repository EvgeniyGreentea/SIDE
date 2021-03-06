import { useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux'
import {allThunkCreators } from '../store/reducers/action-creators';
export const useActions = () => { 
    const dispatch = useDispatch()
    return bindActionCreators(allThunkCreators, dispatch)
}