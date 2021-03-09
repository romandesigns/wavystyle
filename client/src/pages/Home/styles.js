// Dependencies
import styled from "styled-components";

export const Home = styled.section`
  display: grid;
  justify-content: center;
  text-align: center;
  grid-template-columns: 1fr;
  grid-template-rows: 17rem 1fr;

  header {
    h2 {
      padding-top: var(--padding);
      font-size: 3.5rem;
    }

    p {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

  figure {
    img {
      max-width: 110rem;
    }
  }
`;
