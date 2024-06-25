import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, Text, Box, Image } from "@chakra-ui/react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setMessage("Thank you for your message. We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <Container centerContent maxW="container.xl" py={10} bg="gray.50" p={4}>
      <VStack spacing={8} w="full">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">Contact Us</Heading>
          <Text fontSize="lg" mt={4}>We would love to hear from you. Please fill out the form below to get in touch with us.</Text>
        </Box>
        <Image src="/images/contact.jpg" alt="Contact Image" boxSize="400px" objectFit="cover" borderRadius="md" boxShadow="md" />
        <VStack spacing={4} as="form" onSubmit={handleSubmit} w="full">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue">Submit</Button>
          {message && <Text>{message}</Text>}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Contact;