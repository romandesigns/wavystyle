// Dependencies
import styled from "styled-components";
import { media } from "../../utils/styles/media-quries";

export const Nav = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.active.navbar};
  border-radius: var(--radius);
  display: flex;
  height: 4.5rem;
  justify-content: start;
  padding: 0 0 0 var(--padding);
  position: relative;
  align-self: center;
  div {
    display: flex;
    a {
      align-items: center;
      color: ${({ theme }) => theme.active.color};
      display: flex;
      justify-content: center;
      text-decoration: none;
      img {
        border-style: none;
        display: block;
        max-width: 4rem;
      }

      h1 {
        margin: 0 var(--margin) 0 calc(var(--margin) - 1.5rem);
        font-size: 1.7rem;
        font-family: var(--writing);
      }
    }
  }

  ul {
    display: flex;
    flex: 1;
    height: 100%;
    li {
      margin: 0 calc(var(--margin) - 1.5rem);
      height: 100%;
      &:nth-child(3) {
        margin-left: auto;
      }
      &:last-child {
        margin: 0;
      }
      a {
        align-items: center;
        color: ${({ theme }) => theme.active.color};
        display: flex;
        font-weight: 500;
        height: 100%;
        justify-content: center;
        padding: 0 calc(var(--padding) - 1.5rem);
      }
      &:nth-child(1) a {
        color: var(--secondary);
      }
      &:nth-child(2) a {
        color: var(--tertiary);
      }
      &:last-child a {
        background-color: ${({ theme }) => theme.active.hue1};
        border-radius: var(--radius);
        padding: 0 var(--padding);
        position: relative;
        right: 0;
        text-decoration: none;
      }
      a.active {
        text-decoration: underline;
      }
    }
  }

  ${media.mobile`background-color: red;`};
  ${media.tablet`background-color: orange;`};
  ${media.laptop`background-color: green;`};
  ${media.desktop`background-color: purple;`};
`;
