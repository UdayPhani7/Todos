import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Image = styled.img`
  width: 4.5rem;
  height: 4.3rem;
`;

const AppName = styled.h1`
  font-size: 2.1rem;
  letter-spacing: 0.5rem;
  color: var(--color-blue-700);
  text-transform: uppercase;
  text-shadow: 1px 1px 3px var(--color-cyan-600);
`;

export default function Logo() {
  return (
    <LogoLink to="/">
      <Image src="logo.png" alt="Tasky-logo" />
      <AppName>tasky</AppName>
    </LogoLink>
  );
}
