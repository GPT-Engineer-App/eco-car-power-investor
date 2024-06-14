import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Description = () => {
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
      bg="black"
      color="white"
    >
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          The Shift from Fuel to Electricity
        </Heading>
        <Text fontSize="xl">
          As the world continues to battle <Text as="span" color="purple.500">global warming</Text> and <Text as="span" color="gold.500">ozone depletion</Text>, there is a significant shift from fuel to electricity. This transition is crucial for a sustainable future.
        </Text>
        <Text fontSize="xl">
          The demand for electricity is skyrocketing, and traditional methods of generating power are not sufficient to meet this growing need.
        </Text>
        <Text fontSize="xl">
          Introducing a revolutionary method of generating power continuously without relying on nuclear, wind, solar, or water sources. This new technology is not only cheap to produce but also easy to maintain, filling a critical gap in the energy market.
        </Text>
      </VStack>
    </Container>
  );
};

export default Description;