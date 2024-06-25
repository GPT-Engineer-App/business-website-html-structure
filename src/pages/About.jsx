import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">About Us</Heading>
        <Text fontSize="lg">We are a business dedicated to creating websites and online stores for small local businesses. Our mission is to help small businesses establish an online presence and grow their customer base.</Text>
        <Text fontSize="lg">Our team consists of experienced developers, designers, and business consultants who are passionate about helping small businesses succeed.</Text>
      </VStack>
    </Container>
  );
};

export default About;