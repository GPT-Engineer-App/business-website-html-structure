import { Container, Text, VStack, Button, Box, Image, Heading, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.50" p={4}>
      <VStack spacing={8} w="full">
        <Flex w="full" align="center" justify="space-between" bg="blue.500" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="lg" color="white">Business Name</Heading>
          <Spacer />
          <Flex>
            <Button as={Link} to="/" variant="link" color="white" mx={2}>Home</Button>
            <Button as={Link} to="/services" variant="link" color="white" mx={2}>Services</Button>
            <Button as={Link} to="/about" variant="link" color="white" mx={2}>About Us</Button>
            <Button as={Link} to="/contact" variant="link" color="white" mx={2}>Contact</Button>
            <Button as={Link} to="/coming-soon" variant="link" color="white" mx={2}>Coming Soon</Button>
          </Flex>
        </Flex>
        <Box textAlign="center">
          <Image src="/images/hero.jpg" alt="Hero Image" boxSize="400px" objectFit="cover" borderRadius="md" boxShadow="md" />
          <Heading as="h2" size="2xl" mt={4}>Welcome to Our Business</Heading>
          <Text fontSize="xl" mt={2}>We create websites and online stores for small local businesses.</Text>
          <Button colorScheme="blue" size="lg" mt={4} as={Link} to="/services">Our Services</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;