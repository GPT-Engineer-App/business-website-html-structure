import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">Business Name</Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2} _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link as={RouterLink} to="/services" px={2} _hover={{ textDecoration: "none", color: "blue.300" }}>Services</Link>
          <Link as={RouterLink} to="/about" px={2} _hover={{ textDecoration: "none", color: "blue.300" }}>About Us</Link>
          <Link as={RouterLink} to="/contact" px={2} _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
          <Link as={RouterLink} to="/coming-soon" px={2} _hover={{ textDecoration: "none", color: "blue.300" }}>Coming Soon</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;