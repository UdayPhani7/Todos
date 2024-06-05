import Container from "../ui/Container";

export default function Header({ children }) {
  return (
    <Container
      bgColor="var(--color-cyan-50)"
      justifyContent="space-between"
      alignItems="center"
      padding="2rem 4rem"
      as="header"
    >
      {children}
    </Container>
  );
}
