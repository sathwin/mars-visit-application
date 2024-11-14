// components/Success.js
import { Heading, Text, Box } from '@chakra-ui/react';

function Success() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mb={5}>
        Application Submitted!
      </Heading>
      <Text color={'gray.500'}>
        Thank you for your interest in visiting Mars. We will review your application and get back to you soon.
      </Text>
    </Box>
  );
}

export default Success;
