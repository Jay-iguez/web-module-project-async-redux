import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { ContentStyle } from "../styledComponents/styledSheet";
import { inititateFetchTodo } from "../actions/todoActions";

export function Todo(props) {

    const dispatch = useDispatch()
    const todo = useSelector((state) => state.componentState.todo)

    return (
        <>
            <ContentStyle>
                <h1>Find Something Todo:</h1>
                <div>
                   { todo !== '' ?
                    Object.keys(todo).map(item => {
                            if (todo[item] !== ''){
                                return <li key={Date.now()}>{item.charAt(0).toUpperCase() + item.substring(1)} : {todo[item]}</li>
                            }
                    })
                    :
                    <p>Your grabbed todo will appear here, right now that's your todo!</p>
                   }
                   <button onClick={() => dispatch(inititateFetchTodo())}>Grab Todo for you.</button>
                </div>
            </ContentStyle>
        </>
    )
}

export default {
    Todo
}
