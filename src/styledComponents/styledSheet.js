import styled from 'styled-components'

export const ContainerStyle = styled.div`
    font-family: 'Work Sans', sans-serif;
    display: flex;
    margin: 0 .5rem;
    
    h1 {
        font-weight: bold;
        padding: 1rem;
        background-color: #B9D8C2;
        font-size: 2rem;
    },

    p {
        font-size: 1.5rem;
    }
`
export const ContentContainer = styled.div`
    font-family: 'Work Sans', sans-serif;
    background-color: #8AA1B1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1rem 2.5rem;
`

export const ContentStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    h1 {
        font-weight: bold;
        padding: 1rem;
        font-size: 2rem;
    }

    li {
        font-size: 1.2rem;
    }

    button {
        padding: .2rem;
        margin: 1rem 0;
    }

`


export default {
    ContainerStyle,
    ContentStyle
}