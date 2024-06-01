import styled from "styled-components";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export default function Logo() {
  return <Image src="logo.png" alt="Tasky-logo" />;
}
