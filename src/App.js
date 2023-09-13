import React from 'react';
import './App.css';
import { ContainerStyle, ContentContainer } from './styledComponents/styledSheet';
import { Todo } from './Components/Todo'
import { Motivation } from './Components/Motivation';

function App() {
 
  const body = document.querySelector('body')
  body.style.backgroundColor = '#9AC2C9'

  return (
    <>
    <ContainerStyle>
      <h1>Motivation and Todo Idea-generator!</h1>
    </ContainerStyle>
    <ContainerStyle>
      <p>Here you can find some help with finding a thing to do to pass the time alongside a random quote.</p>
    </ContainerStyle>
    <ContainerStyle>
      <h1>Interact below: </h1>
    </ContainerStyle>
    <ContentContainer>
        <Todo />
        <Motivation />
    </ContentContainer>
    </>
  );
}

export default App;