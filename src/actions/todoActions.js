import axios from "axios"

export const COMPONENT_ACTIONS = {
    FETCH_TODO : "FETCH_TODO",
    IS_FETCHING: 'IS_FETCHING',
    CLEAR_FIELD: 'CLEAR_FIELD',
    FETCH_MOTIVATION: 'FETCH_MOTIVATION'
}

const fetchMotivation = (motivation) => {
    return {type: COMPONENT_ACTIONS.FETCH_MOTIVATION, payload: motivation}
}

const isFetching = (isFetch) => {
    return {type: COMPONENT_ACTIONS.IS_FETCHING, payload: isFetch}
}

const fetchTodo = (todo) => {
    return {type: COMPONENT_ACTIONS.FETCH_TODO, payload: todo}
}

const clearField = (field) => {
    return {type: COMPONENT_ACTIONS.CLEAR_FIELD, payload: field}
}


export const inititateFetchTodo = () => dispatch => {
    dispatch(isFetching(true))
    axios.get('https://www.boredapi.com/api/activity')
    .then(res => {
        dispatch(clearField('todo'))
        dispatch(fetchTodo(res.data))
        dispatch(isFetching(false))
    })
    .catch(err => {
        console.error(err)
        dispatch(clearField('todo'))
        dispatch(isFetching(false))
    })
}

export const inititateFetchMotivation = () => dispatch => {
    dispatch(isFetching(true))
    axios.get('https://type.fit/api/quotes')
    .then(res => {
        dispatch(clearField('motivationMessage'))
        dispatch(fetchMotivation(res.data[Math.round(res.data.length * Math.random())]))
        dispatch(isFetching(false))
    })
    .catch(err => {
        console.error(err)
        dispatch(clearField('motivationMessage'))
        dispatch(isFetching(false))
    })
}

export default {
    COMPONENT_ACTIONS, inititateFetchTodo, inititateFetchMotivation
}