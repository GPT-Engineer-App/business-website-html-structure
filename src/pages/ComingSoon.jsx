import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const ComingSoon = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Coming Soon</Heading>
        <Text fontSize="lg">We are working on exciting new services including app development and business consultancy. Stay tuned for more updates!</Text>
      </VStack>
    </Container>
  );
};

export default ComingSoon;