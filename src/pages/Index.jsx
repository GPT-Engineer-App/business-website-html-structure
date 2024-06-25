import { Container, Text, VStack, Button, Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Business Name</Heading>
        <Image src="/images/hero.jpg" alt="Hero Image" boxSize="300px" objectFit="cover" />
        <Text fontSize="lg" textAlign="center">We create websites and online stores for small local businesses.</Text>
        <Button colorScheme="blue" size="lg" as={Link} to="/services">Our Services</Button>
      </VStack>
    </Container>
  );
};

export default Index;