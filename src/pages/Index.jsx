import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaLeaf, FaCar, FaBolt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="teal.500">
          Invest in the Future of Renewable Energy
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Join us in revolutionizing the way we power electric vehicles with 100% renewable energy.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box p={4} textAlign="center">
            <FaLeaf size="3em" color="green" />
            <Text mt={2} fontSize="lg" color="gray.700">Sustainable</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaCar size="3em" color="blue" />
            <Text mt={2} fontSize="lg" color="gray.700">Electric Vehicles</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaBolt size="3em" color="yellow" />
            <Text mt={2} fontSize="lg" color="gray.700">Renewable Energy</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg">
          Invest Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;