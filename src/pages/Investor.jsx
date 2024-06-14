import { Container, Text, VStack, Heading, Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Investor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Container 
      centerContent 
      maxW="container.md" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      p={4}
    >
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          Thank You for Investing in the Future
        </Heading>
        <Text fontSize="xl">
          We appreciate your initiative to be part of the future. Your investment is a step towards a sustainable and innovative tomorrow. Together, we can make a significant impact.
        </Text>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg">
              Book Investor Meeting
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Investor;