import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  ${(props) =>
    props.column
      ? css`
          flex-direction: column;
        `
      : ``};
  ${(props) =>
    props.justifyContent
      ? css`
          justify-content: ${props.justifyContent};
        `
      : ``}
  ${(props) =>
    props.alignItems
      ? css`
          align-items: ${props.alignItems};
        `
      : ``}
  ${(props) =>
    props.padding
      ? css`
          padding: ${props.padding};
        `
      : ``}
  ${(props) =>
    props.margin
      ? css`
          margin: ${props.margin};
        `
      : ``}
  ${(props) =>
    props.bgColor
      ? css`
          background-color: ${props.bgColor};
        `
      : ``}
  ${(props) =>
    props.height
      ? css`
          height: ${props.height};
        `
      : ``}
  ${(props) =>
    props.width
      ? css`
          width: ${props.width};
        `
      : ``}
`;

export default Container;
