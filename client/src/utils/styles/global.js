import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  

    html {
        margin: 0;
        padding: 0;
        height: 100%;

        font-size: 62.5%; /* 16px  62.5 = 10px = 1rem */
        box-sizing: border-box;
    }

    *::before,
    *::after,
    * {
        box-sizing: border-box;
        transition: background  var(--animation);

        ${"" /* border: 1px solid green; */}
    }

    #root {
        height: inherit;
    }

    body {
        height: 100%;
        width:100%;
        margin:0;
        padding: 0 var(--padding);
        box-sizing:border-box;
        font-size: var(--font-size);
        line-height:  var(--line-height);
        font-family: var(--sans);
        color: ${({ theme }) => theme.active.color};
        background-color: ${({ theme }) => theme.active.bg};
        font-family: var(--sans);  
      
         display: grid; 
         grid-template-columns: 144rem;
         grid-template-rows: 1fr;
         justify-content: center;


        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    section {}
    
    a {}

    img {}

    li { list-style: none; }

    h1,h2,h3,h4,h5,h6,p,figure, ul, li {
        margin:0;
        padding:0;
    }
`;
