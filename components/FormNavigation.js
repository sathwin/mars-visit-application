// components/FormNavigation.js
import { ButtonGroup, Button } from '@chakra-ui/react';

function FormNavigation({ step, setStep, isValid, onSubmit }) {
  return (
    <ButtonGroup mt="5">
      {step > 1 && (
        <Button variant="outline" onClick={() => setStep(step - 1)}>
          Back
        </Button>
      )}
      <Button
        colorScheme="teal"
        onClick={onSubmit}
        isDisabled={!isValid}
      >
        {step === 3 ? 'Submit' : 'Next'}
      </Button>
    </ButtonGroup>
  );
}

export default FormNavigation;
