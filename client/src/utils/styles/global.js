import { createGlobalStyle } from "styled-components";
import { media } from "../../utils/styles/media-quries";

export const GlobalStyles = createGlobalStyle`  

    html {
        margin: 0;
        padding: 0;
        height: 100%;
        width:100%;
        font-size: 62.5%; /* 16px  62.5 = 10px = 1rem */
        box-sizing: border-box;
    }

    *::before,
    *::after,
    * {
        box-sizing: border-box;
        transition: background  var(--animation);

    ${"" /* border: 1px solid green;    */}
    }

    #root {
        height: 100%;
        width:100%;
    }

    body {
        height: 100%;
        width:100%;
        background-color: ${({ theme }) => theme.active.bg};
        box-sizing:border-box;
        color: ${({ theme }) => theme.active.color};
        font-family: var(--sans);
        font-family: var(--sans);  
        font-size: var(--font-size);
        line-height:  var(--line-height);
        margin:0;
        padding: 0 var(--padding);
        display: grid; 
        grid-template-columns: 80vw;
        grid-template-rows: 1fr;
        justify-content: center;

        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;

        ${media.mobile`grid-template-columns: minmax(auto,98vw)`};
        ${media.tablet`grid-template-columns: minmax(auto,96vw)`};
        ${media.laptop`grid-template-columns: minmax(auto,93vw)`};
        ${media.desktop`grid-template-columns: minmax(auto,80vw)`};
    }

    section {}
    
    a {
        text-decoration:none;
        &:hover {
        text-decoration:underline;
        }
    }

    img {}

    li { list-style: none; }

    h1,h2,h3,h4,h5,h6,p,figure, ul, li {
        margin:0;
        padding:0;
    }
`;
