import { Container, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Layout = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <nav>
        <Link as={NextLink} href="/" mr="4">
          Home
        </Link>
        <Link as={NextLink} href="/about" mr="4">
          About
        </Link>
        <Link as={NextLink} href="/projects">
          Projects
        </Link>
      </nav>
      {children}
    </Container>
  );
};

export default Layout;