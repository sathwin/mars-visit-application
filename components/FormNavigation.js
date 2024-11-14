// components/FormNavigation.js
import { ButtonGroup, Button } from '@chakra-ui/react';

function FormNavigation({ step, setStep }) {
  return (
    <ButtonGroup mt="5" width="100%" justifyContent="space-between">
      {step > 1 ? (
        <Button variant="outline" onClick={() => setStep(step - 1)}>
          Back
        </Button>
      ) : (
        <div />
      )}
      <Button
        colorScheme="teal"
        type="submit" 
      >
        {step === 3 ? 'Submit' : 'Next'}
      </Button>
    </ButtonGroup>
  );
}

export default FormNavigation;
