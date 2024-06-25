import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const ComingSoon = () => {
  return (
    <Container centerContent maxW="container.xl" py={10} bg="gray.50" p={4}>
      <VStack spacing={8} w="full">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">Coming Soon</Heading>
          <Text fontSize="lg" mt={4}>We are working on exciting new services including app development and business consultancy. Stay tuned for more updates!</Text>
        </Box>
        <Image src="/images/coming-soon.jpg" alt="Coming Soon Image" boxSize="400px" objectFit="cover" borderRadius="md" boxShadow="md" />
      </VStack>
    </Container>
  );
};

export default ComingSoon;