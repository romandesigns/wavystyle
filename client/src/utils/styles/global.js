import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
    html {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        font-size: 62.5%; /* 16px  62.5 = 10px = 1rem */
        box-sizing: border-box;
    }
    
    html {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        font-size: 62.5%; /* 16px  62.5 = 10px = 1rem */
        box-sizing: border-box;
    }

    *::before,
    *::after,
    * {
        box-sizing: border-box;
        transition: background  var(--animation); 
    }

    #root {
        height: inherit;
    }

    body {
        margin:0;
        padding: 0 var(--padding);
        height:100%;
        width:100%;
        box-sizing:border-box;
        font-size: var(--font-size);
        line-height:  var(--line-height);
        font-family: var(--sans);  
         background-color: ${({ theme }) => theme.active.bg_darker}
    }

    section {}
    
    a {}

    img {}

    ul {
        margin: 0;
        padding: 0;
    }

    li {list-style: none;}

    h1,h2,h3,h4,h5,h6,p, ul, li {
        margin:0;
        padding:0;
    }

    figure {
        margin:0;
        padding: 0;
    }
    

`;
