import { Heading, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ThreeScene from "../components/ThreeScene";

const Home = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb="6">
          My Portfolio
        </Heading>
        <ThreeScene />
      </Box>
    </Layout>
  );
};

export default Home;
