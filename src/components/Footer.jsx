import { Box, Flex, Link, Text, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="blue.500" color="white" py={4} mt={10}>
      <Flex direction="column" align="center">
        <Text mb={2}>Contact us: (123) 456-7890</Text>
        <Flex>
          <Link href="https://www.facebook.com" isExternal mx={2}>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://www.twitter.com" isExternal mx={2}>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
          <Link href="https://www.instagram.com" isExternal mx={2}>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;