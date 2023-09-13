import axios from "axios"

export const COMPONENT_ACTIONS = {
    FETCH_TODO : "FETCH_TODO",
    IS_FETCHING_TODO: 'IS_FETCHING_TODO',
    CLEAR_TODO: 'CLEAR_TODO',
    FETCH_TODO: 'FETCH_TODO'
}

const isFetchingTodo = (isFetch) => {
    return {type: COMPONENT_ACTIONS.IS_FETCHING_TODO, payload: isFetch}
}

const fetchTodo = (todo) => {
    return {type: COMPONENT_ACTIONS.FETCH_TODO, payload: todo}
}

const clearTodo = () => {
    return {type: COMPONENT_ACTIONS.CLEAR_TODO}
}

export const inititateFetchTodo = () => dispatch => {
    dispatch(isFetchingTodo(true))
    axios.get('https://www.boredapi.com/api/activity')
    .then(res => {
        console.log(res.data)
        dispatch(clearTodo())
        dispatch(fetchTodo(res.data))
        dispatch(isFetchingTodo(false))
    })
    .catch(err => {
        console.error(err)
        dispatch(clearTodo())
        dispatch(isFetchingTodo(false))
    })
    
}

export default {
    COMPONENT_ACTIONS, inititateFetchTodo
}