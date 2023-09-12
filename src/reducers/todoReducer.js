import { TODO_ACTIONS } from "../actions/todoActions"

const intialState = {
    motivationMessage: '',
    todo: {
        activity: 'Click the get todo button...',
        type: "For fun",
        participants: 'Just you.',
        price: 'How much is your internet/power bill?',
        link: '',
        key: '',
        accessibility: ''
    }
}

export const todoReducer = (state = intialState, action) => {
    switch(action.type){
        case TODO_ACTIONS.TEST:
            return {
                ...state,
                activity: 'WORKED'
            }
        default:
            return state
    }
}

export default {
    todoReducer
}