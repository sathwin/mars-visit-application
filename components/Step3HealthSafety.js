// components/Step3HealthSafety.js
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  FormErrorMessage,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormNavigation from './FormNavigation';

function Step3HealthSafety({ setStep }) {
  const schema = yup.object().shape({
    healthDeclaration: yup.boolean().oneOf([true], 'Health Declaration is required'),
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
    // Here you can handle the final submission (e.g., send data to a server)
  };

  useEffect(() => {
    const savedData = localStorage.getItem('step3');
    if (savedData) {
      reset(JSON.parse(savedData));
    }
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={formState.errors.healthDeclaration} mb="3">
        <Checkbox
          name="healthDeclaration"
          {...register('healthDeclaration')}
        >
          I confirm that I am in good health
        </Checkbox>
        <FormErrorMessage>
          {formState.errors.healthDeclaration && formState.errors.healthDeclaration.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formState.errors.emergencyContact} mb="3">
        <FormLabel>Emergency Contact Information</FormLabel>
        <Input
          name="emergencyContact"
          placeholder="Enter emergency contact"
          {...register('emergencyContact')}
        />
        <FormErrorMessage>
          {formState.errors.emergencyContact && formState.errors.emergencyContact.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mb="3">
        <FormLabel>Any Medical Conditions (if applicable)</FormLabel>
        <Input
          name="medicalConditions"
          placeholder="Enter medical conditions"
          {...register('medicalConditions')}
        />
      </FormControl>

      <FormNavigation
        step={3}
        setStep={setStep}
        isValid={formState.isValid}
        onSubmit={handleSubmit(onSubmit)}
      />
    </form>
  );
}

export default Step3HealthSafety;
