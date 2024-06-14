import { Container, Text, VStack, Heading, Box, FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react";
import emailjs from 'emailjs-com';
import { useState } from "react";

const Investor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          toast({
            title: "Form submitted.",
            description: "Your details have been sent successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
      }, (error) => {
          console.log(error.text);
          toast({
            title: "An error occurred.",
            description: "Unable to send your details. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
      });
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
      bg="black"
      color="white"
    >
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          Thank You for Investing in the Future
        </Heading>
        <Text fontSize="xl">
          We appreciate your initiative to be part of the future. Your investment is a step towards a <Text as="span" color="purple.500">sustainable</Text> and <Text as="span" color="gold.500">innovative</Text> tomorrow. Together, we can make a significant impact.
        </Text>
        <Text fontSize="xl">
          More details will be shared during the meeting, including a demonstration of the free turbine.
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