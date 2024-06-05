import styled from "styled-components";
import Container from "../ui/Container";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const NavItem = styled.li`
  width: 7.4rem;
  background-color: var(--color-cyan-100);
  font-weight: 600;
  text-align: center;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;

  &:hover {
    box-shadow: var(--shadow-md);
    background-color: var(--color-cyan-200);
  }
`;

const NavItemLink = styled(NavLink)`
  color: var(--color-cyan-700);
`;

export default function NavBar() {
  return (
    <Container as="nav">
      <NavList>
        <NavItem>
          <NavItemLink to="/">Home</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/todos">Todos</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/login">Profile</NavItemLink>
        </NavItem>
      </NavList>
    </Container>
  );
}
