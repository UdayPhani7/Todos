import styled from "styled-components";

const StyledMain = styled.main`
  background-color: var(--color-cyan-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
