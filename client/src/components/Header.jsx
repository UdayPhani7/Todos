import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-cyan-50);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;

  @media screen and (max-width: 576px) {
    padding: 1.5rem 3rem;
  }
`;

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
