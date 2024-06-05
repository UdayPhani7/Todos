import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.size
      ? css`
          font-size: ${props.size};
        `
      : ``}
  ${(props) =>
    props.color
      ? css`
          color: ${props.color};
        `
      : css`
          color: var(--color-cyan-600);
        `};
`;

export default Heading;
