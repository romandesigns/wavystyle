// Dependencies
import styled from "styled-components";

// Theme Picker
export const Form = styled.form`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50vh;
  left: 0.5rem;
  background-color: rgba(58, 58, 58, 0.5);
  padding: calc(var(--padding) - 0.5rem) calc(var(--padding) - 1rem);
  border-radius: var(--radius);
  z-index: 1000;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    margin: 0.3rem 0;
    cursor: pointer;
    input {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      &::before {
        content: "";
        height: inherit;
        width: inherit;
        border-radius: 100%;
        transition: box-shadow 0.25s ease;
      }
    }
  }

  & label:nth-child(1) input {
    &::before {
      background-color: var(--dark-hue-1);
      box-shadow: 0 0 0 0.1rem var(--dark-hue-1);
    }
    &:checked::before {
      content: "";
      box-shadow: 0 0 0 0.2rem var(--light), 0 0 0 0.5rem var(--dark-hue-1);
    }
  }
  & label:nth-child(2) input {
    &::before {
      background-color: var(--blue-hue-1);
      box-shadow: 0 0 0 0.05rem var(--blue-hue-1);
    }
    &:checked::before {
      content: "";
      box-shadow: 0 0 0 0.2rem var(--light), 0 0 0 0.5rem var(--blue-hue-1);
    }
  }
  & label:nth-child(3) input {
    &::before {
      background-color: var(--light-hue-1);
      box-shadow: 0 0 0 0.05rem var(--light-hue-1);
    }
    &:checked::before {
      content: "";
      box-shadow: 0 0 0 0.2rem var(--light), 0 0 0 0.5rem var(--light-hue-1);
    }
  }
`;
