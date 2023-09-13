import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { ContentStyle } from "../styledComponents/styledSheet";
import { inititateFetchMotivation } from "../actions/todoActions";

export function Motivation() {

    const dispatch = useDispatch()
    const motivation = useSelector((state) => state.componentState.motivationMessage)
  
    return (
        <>
            <ContentStyle>
                <h1>Find Some Motivation:</h1>
                <div>
                    { motivation !== '' ?

                    <>
                    <h2>{motivation.text}</h2>
                    <p>{motivation.author}</p>
                    </>
                    
                    :

                    <p>Your motivational message will appear here, I believe in you!</p>

                    }
                    <button onClick={() => dispatch(inititateFetchMotivation())}>Grab Motivation for you.</button>
                </div>
            </ContentStyle>
        </>
    )
}

export default {
    Motivation
}