import Logo from "./Logo";
import Container from "../ui/Container";

export default function Header() {
  return (
    <Container
      bgColor="var(--color-grey-200)"
      justifyContent="space-between"
      alignItems="center"
      padding="10px 50px"
      height="10vh"
      as="header"
    >
      <Logo />
      <nav>NavBar</nav>
    </Container>
  );
}
