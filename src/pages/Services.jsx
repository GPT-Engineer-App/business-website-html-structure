import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Services = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Our Services</Heading>
        <Text fontSize="lg">We offer the following services:</Text>
        <Text fontSize="md">- Website Development</Text>
        <Text fontSize="md">- Online Store Creation</Text>
        <Text fontSize="md">- Future App Development</Text>
        <Text fontSize="md">- Business Consultancy</Text>
      </VStack>
    </Container>
  );
};

export default Services;