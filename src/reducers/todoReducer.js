import { COMPONENT_ACTIONS } from "../actions/todoActions"

const intialState = {
    motivationMessage: '',
    todo: '',
    isFetching: false
}

export const componentReducer = (state = intialState, action) => {
    switch(action.type){
        case COMPONENT_ACTIONS.FETCH_TODO:
            const fetchedTodo = action.payload
            return {
                ...state,
                todo: fetchedTodo
            }
        case COMPONENT_ACTIONS.CLEAR_FIELD:
            return {
                ...state,
                [action.payload]: intialState[action.payload]
            }
        case COMPONENT_ACTIONS.IS_FETCHING:
            return {...state,
            isFetching: action.payload}
        case COMPONENT_ACTIONS.FETCH_MOTIVATION:
            const fetchedMotivation = action.payload
            return {
                ...state,
                motivationMessage: fetchedMotivation
            }
        default:
            return state
    }
}

export default {
    componentReducer
}