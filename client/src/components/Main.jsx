import Container from "../ui/Container";

export default function Main({ children }) {
  return (
    <Container
      bgColor="var(--color-cyan-0)"
      alignItems="center"
      justifyContent="center"
      as="main"
    >
      {children}
    </Container>
  );
}
