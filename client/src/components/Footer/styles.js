// Dependencies
import styled from "styled-components";

export const FOOTER = styled.footer`
  padding: 0 var(--padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.active.navbar};
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  font-size: 1.3rem;
  a {
    display: inline-block;
    color: var(--link);
    font-weight: bold;
  }
`;
