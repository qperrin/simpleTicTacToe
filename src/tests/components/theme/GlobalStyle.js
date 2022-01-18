import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color : ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.mainColor};
        transition: all .2s ease;
    }
    h1,h2 {
        letter-spacing : 2px;
    }
    h1 {
        font-size : 1.4rem
    }
    h2 {
        font-size : 1.2rem
    }
    
  button {
    background-color : ${(props) => props.theme.bgColor};
    color : ${(props) => props.theme.mainColor};
    padding: .5rem 1rem;
    border: 1px solid;
    border-radius : 3px;
    transition: all .3s ease;
  }
  button:hover {
      border: 1px solid;
      background-color : ${(props) => props.theme.mainColor};
      color : ${(props) => props.theme.bgColor};
      border-radius : 3px;
      cursor: pointer;
  }
    
`;
