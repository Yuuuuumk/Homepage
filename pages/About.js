import { Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <Heading as="h1" size="2xl">
        About
      </Heading>
      <p>This is the about page.</p>
    </Layout>
  );
};

export default About;
