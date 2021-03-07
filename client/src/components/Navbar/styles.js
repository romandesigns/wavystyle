// Dependencies
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    height: 5rem;
    justify-content: start;
    align-items:center;
    background-color: ${({ theme }) => theme.active.navbar};
    padding:0 0 0 var(--padding) ;
    margin-top: var(--margin);
    border-radius: var(--radius);
    position:relative;
    overflow: hidden;

  div {
      display: flex;
    a {
      display: flex;
      justify-content: center;
      align-items:center;
      color: ${({ theme }) => theme.active.color};
      text-decoration: none;
        img {
            border-style: none;
            display: block;
            max-width: 4rem;
        }

        h1 {
            margin:0 var(--margin);
            font-size:1.7rem;
        }
    }
  }

  ul {
      display:flex;
      height: 100%;
      flex:1;
      li {

            margin: 0 calc(var(--margin) - 1.5rem);
            height: 100%;
            &:nth-child(3){
                margin-left: auto;
            }
            &:last-child{
                margin: 0;
            }
          a {
            padding:0 calc(var(--padding) - 1.5rem);
            color: ${({ theme }) => theme.active.color};
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight:500;

          }
           &:nth-child(1) a{
              color: var(--secondary);
            }
           &:nth-child(2) a{
              color: var(--tertiary);
            }
           &:last-child a{
              background-color: ${({ theme }) => theme.active.hue1};
              text-decoration: none;
              position:relative;
              border-radius: var(--radius);
               padding:0 var(--padding);
               right: 0;
            }
      }
    }
`;
