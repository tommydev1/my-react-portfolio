import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        font-family: 'Truculenta', sans-serif;
        user-select: none;
        @media screen and (max-width: 768px) {
        font-size: 45%;
     }
        @media screen and (max-width: 617px) {
        font-size: 40%;
     }
        @media screen and (max-width: 360px) {
        font-size: 30%;
     }
    }
    body {
        background: linear-gradient(180deg, rgba(24,20,26,1) 10%, rgba(35,31,40,1) 100%);
    }
    div {
        overflow: hidden;
    }
    button {
        font-family: 'Truculenta', sans-serif;
        padding: 0.8rem 1.6rem;
        font-size: 2rem;
        font-weight: 500;
        background: transparent;
        color: white;
        cursor: pointer;
        border: 1px solid white;
        &:hover {
            background: white; 
            color: black;
        }
        @media screen and (max-width: 768px) {
        padding: 1.2rem 3rem;
        }
    }
    h2 {
        font-size: 10rem;
        width: fit-content;
    }
    h3{
        font-size: 4rem;
    }
    h4{
        font-size: 4rem;
    }
`;
