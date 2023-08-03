import styled from "styled-components";

export const Button = styled.button`
  border: none;
  color: hsla(28, 100%, 97%, 1);
  background-color: ${(props) =>
    props.primary ? "hsla(7, 77%, 66%, 1)" : "hsla(0, 0%, 1%, 1)"};
  border-radius: 100vmax;
  padding: 0.5rem 1.75rem;
  font-weight: 700;
  line-height: 2;
  font-size: 0.875rem;

  @media only screen and (min-width: 37.5em) {
    font-size: 1rem;
    line-height: 1.75;
    padding: 0.87rem 2.81rem;
  }

  @media only screen and (min-width: 60em) {
    transition: background-color 150ms ease;
    cursor: pointer;
    &:hover,
    &:focus-visible {
      background-color: ${(props) =>
        props.primary ? "hsla(28, 89%, 67%, 1)" : "hsla(252, 66%, 62%, 1)"};
    }
  }
`;
