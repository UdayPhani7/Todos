import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavItem = styled.li`
  width: 6rem;
  font-weight: 600;
  text-align: center;
  border-radius: 3px;
  padding: 0.5rem 0;
  background-color: var(--color-cyan-50);

  &:hover {
    box-shadow: var(--shadow-sm);
    background-color: var(--color-cyan-100);
  }
`;

const NavItemLink = styled(NavLink)`
  color: var(--color-cyan-700);

  &:hover {
    color: var(--color-cyan-500);
  }
`;

export default function NavBar() {
  return (
    <nav>
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
    </nav>
  );
}
