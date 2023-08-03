import { styled } from "styled-components";

const AttributionWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 0.55125rem;

  a {
    color: hsla(7, 77%, 66%, 1);
  }

  @media only screen and (min-width: 60em) {
    a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -0.075rem;
        left: 0;
        width: 100%;
        height: 0.11rem;
        background-color: hsla(7, 77%, 66%, 1);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 150ms ease;
      }
      &:hover {
        &::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
`;

export function Attribution() {
  return (
    <AttributionWrapper className="Attribution | fw-bold">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/semperprimum">Bogdan Kim</a>.
    </AttributionWrapper>
  );
}
