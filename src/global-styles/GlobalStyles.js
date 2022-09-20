import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Kumbh Sans', sans-serif;   
        }


    body {
        min-height: 100vh;
        width: 100vw;
        overflow-x: hidden;
    }


     button, input, a {
        border: unset;
        outline: unset;
        background-color: unset;
        text-decoration: none;
    }

`;
