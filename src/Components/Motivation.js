import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { ContentStyle } from "../styledComponents/styledSheet";

export function Motivation() {

    const dispatch = useDispatch()
    const motivation = useSelector((state) => state.componentState.motivationMessage)

    return (
        <>
            <ContentStyle>
                <h1>Find Some Motivation:</h1>
                <div>
                    { motivation !== '' ?

                    <p>{motivation}</p>

                    :

                    <p>Your motivational message will appear here, I believe in you!</p>

                    }
                    <button>Grab Motivation for you.</button>
                </div>
            </ContentStyle>
        </>
    )
}

export default {
    Motivation
}