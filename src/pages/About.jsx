import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.xl" py={10} bg="gray.50" p={4}>
      <VStack spacing={8} w="full">
        <Box textAlign="center">
        <Heading as="h1" size="2xl">About Us</Heading>
          <Text fontSize="lg" mt={4}>We are a business dedicated to creating websites and online stores for small local businesses. Our mission is to help small businesses establish an online presence and grow their customer base.</Text>
          <Text fontSize="lg" mt={4}>Our team consists of experienced developers, designers, and business consultants who are passionate about helping small businesses succeed.</Text>
        </Box>
        <Image src="/images/about-us.jpg" alt="About Us Image" boxSize="400px" objectFit="cover" borderRadius="md" boxShadow="md" />
      </VStack>
    </Container>
  );
};

export default About;