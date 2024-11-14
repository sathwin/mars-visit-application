// components/ProgressBar.js
import { Box, Progress, Flex, Text } from '@chakra-ui/react';

function ProgressBar({ step }) {
  const progress = ((step - 1) / 3) * 100;
  const steps = ['Personal Info', 'Travel Preferences', 'Health & Safety'];

  return (
    <Box mb="5">
      <Flex justify="space-between" mb="2">
        {steps.map((label, index) => (
          <Text
            key={index}
            color={step === index + 1 ? 'teal.400' : 'gray.300'}
            fontWeight={step === index + 1 ? 'bold' : 'normal'}
            fontSize="sm"
          >
            {label}
          </Text>
        ))}
      </Flex>
      <Progress value={progress} size="sm" colorScheme="teal" />
    </Box>
  );
}

export default ProgressBar;
