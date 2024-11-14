// components/Step2TravelPreferences.js
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormNavigation from './FormNavigation';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Step2TravelPreferences({ setStep }) {
  const schema = yup.object().shape({
    departureDate: yup.date().required('Departure Date is required'),
    returnDate: yup.date().required('Return Date is required'),
    accommodation: yup.string().required('Accommodation is required'),
    specialRequests: yup.string(),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit', 
  });
  
  const onSubmit = (data) => {
    localStorage.setItem('step2', JSON.stringify(data));
    setStep(3);
  };

  useEffect(() => {
    const savedData = localStorage.getItem('step2');
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
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!formState.errors.departureDate} mb="3">
          <FormLabel>Departure Date</FormLabel>
          <Input
            type="date"
            name="departureDate"
            {...register('departureDate')}
            width="100%"
          />
          <FormErrorMessage>
            {formState.errors.departureDate && formState.errors.departureDate.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!formState.errors.returnDate} mb="3">
          <FormLabel>Return Date</FormLabel>
          <Input
            type="date"
            name="returnDate"
            {...register('returnDate')}
            width="100%"
          />
          <FormErrorMessage>
            {formState.errors.returnDate && formState.errors.returnDate.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!formState.errors.accommodation} mb="3">
          <FormLabel>Accommodation Preference</FormLabel>
          <Select name="accommodation" {...register('accommodation')} width="100%">
            <option value="">Select an option</option>
            <option value="Space Hotel">Space Hotel</option>
            <option value="Martian Base">Martian Base</option>
          </Select>
          <FormErrorMessage>
            {formState.errors.accommodation && formState.errors.accommodation.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mb="3">
          <FormLabel>Special Requests or Preferences</FormLabel>
          <Input
            name="specialRequests"
            placeholder="Enter any special requests"
            {...register('specialRequests')}
            width="100%"
          />
        </FormControl>

        <FormNavigation
          step={2}
          setStep={setStep}
          isValid={formState.isValid}
          onSubmit={handleSubmit(onSubmit)}
        />
      </form>
    </MotionBox>
  );
}

export default Step2TravelPreferences;
