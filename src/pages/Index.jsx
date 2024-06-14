import { Container, Text, VStack, Heading, Button, Box, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaLeaf, FaCar, FaBolt } from "react-icons/fa";
import electricCarBackground from "../../public/images/electric-car-charging.jpg";

const Index = () => {
  return (
    <Container 
      centerContent 
      maxW="container.xl" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      p={4}
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${electricCarBackground})`}
        backgroundSize="cover"
        backgroundPosition="center"
        opacity="0.5"
        zIndex="-1"
      />
      <VStack spacing={8} textAlign="center" zIndex="1">
        <Heading as="h1" size="2xl" color="black">
          Invest in the Future of Renewable Energy
        </Heading>
        <Text fontSize="xl" color="black">
          Join us in revolutionizing the way we power electric vehicles with 100% renewable energy.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box p={4} textAlign="center">
            <FaLeaf size="3em" color="black" />
            <Text mt={2} fontSize="lg" color="black">Sustainable</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaCar size="3em" color="black" />
            <Text mt={2} fontSize="lg" color="black">Electric Vehicles</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaBolt size="3em" color="black" />
            <Text mt={2} fontSize="lg" color="black">Renewable Energy</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg">
          Invest Now
        </Button>
        <Button as={Link} to="/description" colorScheme="teal" size="lg">
          Learn More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;