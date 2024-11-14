// components/Step1PersonalInfo.js
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormNavigation from './FormNavigation';

function Step1PersonalInfo({ setStep }) {
  const schema = yup.object().shape({
    fullName: yup.string().required('Full Name is required'),
    dateOfBirth: yup.date().required('Date of Birth is required'),
    nationality: yup.string().required('Nationality is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    // Save data to localStorage or state management
    localStorage.setItem('step1', JSON.stringify(data));
    setStep(2);
  };

  useEffect(() => {
    const savedData = localStorage.getItem('step1');
    if (savedData) {
      reset(JSON.parse(savedData));
    }
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={formState.errors.fullName} mb="3">
        <FormLabel>Full Name</FormLabel>
        <Input
          name="fullName"
          placeholder="Enter your full name"
          {...register('fullName')}
        />
        <FormErrorMessage>
          {formState.errors.fullName && formState.errors.fullName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formState.errors.dateOfBirth} mb="3">
        <FormLabel>Date of Birth</FormLabel>
        <Input
          type="date"
          name="dateOfBirth"
          {...register('dateOfBirth')}
        />
        <FormErrorMessage>
          {formState.errors.dateOfBirth && formState.errors.dateOfBirth.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formState.errors.nationality} mb="3">
        <FormLabel>Nationality</FormLabel>
        <Input
          name="nationality"
          placeholder="Enter your nationality"
          {...register('nationality')}
        />
        <FormErrorMessage>
          {formState.errors.nationality && formState.errors.nationality.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formState.errors.email} mb="3">
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          placeholder="Enter your email"
          {...register('email')}
        />
        <FormErrorMessage>
          {formState.errors.email && formState.errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formState.errors.phone} mb="3">
        <FormLabel>Phone Number</FormLabel>
        <Input
          name="phone"
          placeholder="Enter your phone number"
          {...register('phone')}
        />
        <FormErrorMessage>
          {formState.errors.phone && formState.errors.phone.message}
        </FormErrorMessage>
      </FormControl>

      <FormNavigation
        step={1}
        setStep={setStep}
        isValid={formState.isValid}
        onSubmit={handleSubmit(onSubmit)}
      />
    </form>
  );
}

export default Step1PersonalInfo;
