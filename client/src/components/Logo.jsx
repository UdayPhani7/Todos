import styled from "styled-components";
import Heading from "../ui/Heading";
import { NavLink } from "react-router-dom";

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;
`;

export default function Logo() {
  return (
    <LogoLink>
      <Image src="logo.png" alt="Tasky-logo" />
      <Heading size="2.6rem">Tasky</Heading>
    </LogoLink>
  );
}
