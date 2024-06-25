import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Services = () => {
  return (
    <Container centerContent maxW="container.xl" py={10} bg="gray.50" p={4}>
      <VStack spacing={8} w="full">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">Our Services</Heading>
          <Text fontSize="lg" mt={4}>We offer the following services:</Text>
          <Text fontSize="md" mt={2}>- Website Development</Text>
          <Text fontSize="md" mt={2}>- Online Store Creation</Text>
          <Text fontSize="md" mt={2}>- Future App Development</Text>
          <Text fontSize="md" mt={2}>- Business Consultancy</Text>
        </Box>
        <Image src="/images/services.jpg" alt="Services Image" boxSize="400px" objectFit="cover" borderRadius="md" boxShadow="md" />
      </VStack>
    </Container>
  );
};

export default Services;