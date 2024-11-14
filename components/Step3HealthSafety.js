// components/Step3HealthSafety.js
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormNavigation from './FormNavigation';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Step3HealthSafety({ setStep }) {
  const schema = yup.object().shape({
    healthDeclaration: yup
      .boolean()
      .oneOf([true], 'Health Declaration is required'),
    emergencyContact: yup.string().required('Emergency Contact is required'),
    medicalConditions: yup.string(),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    localStorage.setItem('step3', JSON.stringify(data));
    setStep(4);
  };

  useEffect(() => {
    const savedData = localStorage.getItem('step3');
    if (savedData) {
      reset(JSON.parse(savedData));
    }
  }, [reset]);

  return (
    <MotionBox
      maxW="500px"
      mx="auto"
      mt="10"
      p="5"
      bg="rgba(0, 0, 0, 0.6)"
      borderRadius="md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!formState.errors.healthDeclaration} mb="3">
          <Checkbox
            name="healthDeclaration"
            {...register('healthDeclaration')}
            colorScheme="teal"
          >
            I confirm that I am in good health
          </Checkbox>
          <FormErrorMessage>
            {formState.errors.healthDeclaration &&
              formState.errors.healthDeclaration.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!formState.errors.emergencyContact} mb="3">
          <FormLabel>Emergency Contact Information</FormLabel>
          <Input
            name="emergencyContact"
            placeholder="Enter emergency contact"
            {...register('emergencyContact')}
            width="100%"
          />
          <FormErrorMessage>
            {formState.errors.emergencyContact &&
              formState.errors.emergencyContact.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mb="3">
          <FormLabel>Any Medical Conditions (if applicable)</FormLabel>
          <Input
            name="medicalConditions"
            placeholder="Enter medical conditions"
            {...register('medicalConditions')}
            width="100%"
          />
        </FormControl>

        <FormNavigation
          step={3}
          setStep={setStep}
          isValid={formState.isValid}
          onSubmit={handleSubmit(onSubmit)}
        />
      </form>
    </MotionBox>
  );
}

export default Step3HealthSafety;
