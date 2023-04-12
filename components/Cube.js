import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Cube = () => {
  return (
    <Box w="50px" h="50px" bg="green" position="absolute">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Box w="50px" h="50px" bg="blue" />
      </motion.div>
    </Box>
  );
};

export default Cube;
