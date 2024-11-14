// components/Step2TravelPreferences.js
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormNavigation from './FormNavigation';

function Step2TravelPreferences({ setStep }) {
  const schema = yup.object().shape({
    departureDate: yup.date().required('Departure Date is required'),
    returnDate: yup.date().required('Return Date is required'),
    accommodation: yup.string().required('Accommodation is required'),
    specialRequests: yup.string(),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={formState.errors.departureDate} mb="3">
        <FormLabel>Departure Date</FormLabel>
        <Input
          type="date"
          name="departureDate"
          {...register('departureDate')}
        />
        <FormErrorMessage>
          {formState.errors.departureDate && formState.errors.departureDate.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formState.errors.returnDate} mb="3">
        <FormLabel>Return Date</FormLabel>
        <Input
          type="date"
          name="returnDate"
          {...register('returnDate')}
        />
        <FormErrorMessage>
          {formState.errors.returnDate && formState.errors.returnDate.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formState.errors.accommodation} mb="3">
        <FormLabel>Accommodation Preference</FormLabel>
        <Select name="accommodation" {...register('accommodation')}>
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
        />
      </FormControl>

      <FormNavigation
        step={2}
        setStep={setStep}
        isValid={formState.isValid}
        onSubmit={handleSubmit(onSubmit)}
      />
    </form>
  );
}

export default Step2TravelPreferences;
