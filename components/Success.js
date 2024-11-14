// components/Success.js
import { Heading, Text, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Success() {
  return (
    <MotionBox
      textAlign="center"
      py={10}
      px={6}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      maxW="500px"
      mx="auto"
      mt="10"
      bg="rgba(0, 0, 0, 0.6)"
      borderRadius="md"
    >
      <Heading as="h2" size="xl" mb={5}>
        Application Submitted!
      </Heading>
      <Text color={'gray.300'}>
        Thank you for your interest in visiting Mars. We will review your application and get back to you soon.
      </Text>
    </MotionBox>
  );
}

export default Success;
