import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    visibility: visible;
    opacity: 1;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }


  body {
    margin: 0;
    font-family: monospace;
    background: #0d0d0d;
    color: white;
    height: 100vh;
  }

  #root {
    height: 100%;
    overflow: hidden;
  }

  h2 {
    font-family: syne;
    letter-spacing: 0.2rem;
    font-weight: 400;
    text-align: center;
    line-height: 2rem;
  }
`;
