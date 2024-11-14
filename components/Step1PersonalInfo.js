// components/Step1PersonalInfo.js
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormNavigation from './FormNavigation';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

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
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
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
    <MotionBox
      maxW="500px"
      mx="auto"
      mt="10"
      p="5"
      bg="rgba(0, 0, 0, 0.6)"
      borderRadius="md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <FormControl isInvalid={!!formState.errors.fullName} mb="3">
          <FormLabel>Full Name</FormLabel>
          <Input
            name="fullName"
            placeholder="Enter your full name"
            {...register('fullName')}
            width="100%"
          />
          <FormErrorMessage role="alert">
            {formState.errors.fullName && formState.errors.fullName.message}
          </FormErrorMessage>
        </FormControl>

        {/* Date of Birth */}
        <FormControl isInvalid={!!formState.errors.dateOfBirth} mb="3">
          <FormLabel>Date of Birth</FormLabel>
          <Input
            type="date"
            name="dateOfBirth"
            {...register('dateOfBirth')}
            width="100%"
          />
          <FormErrorMessage role="alert">
            {formState.errors.dateOfBirth && formState.errors.dateOfBirth.message}
          </FormErrorMessage>
        </FormControl>

        {/* Nationality */}
        <FormControl isInvalid={!!formState.errors.nationality} mb="3">
          <FormLabel>Nationality</FormLabel>
          <Input
            name="nationality"
            placeholder="Enter your nationality"
            {...register('nationality')}
            width="100%"
          />
          <FormErrorMessage role="alert">
            {formState.errors.nationality && formState.errors.nationality.message}
          </FormErrorMessage>
        </FormControl>

        {/* Email */}
        <FormControl isInvalid={!!formState.errors.email} mb="3">
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            placeholder="Enter your email"
            {...register('email')}
            width="100%"
          />
          <FormErrorMessage role="alert">
            {formState.errors.email && formState.errors.email.message}
          </FormErrorMessage>
        </FormControl>

        {/* Phone Number */}
        <FormControl isInvalid={!!formState.errors.phone} mb="3">
          <FormLabel>Phone Number</FormLabel>
          <Input
            name="phone"
            placeholder="Enter your phone number"
            {...register('phone')}
            width="100%"
          />
          <FormErrorMessage role="alert">
            {formState.errors.phone && formState.errors.phone.message}
          </FormErrorMessage>
        </FormControl>

        {/* Navigation Buttons */}
        <FormNavigation
          step={1}
          setStep={setStep}
        />
      </form>
    </MotionBox>
  );
}

export default Step1PersonalInfo;
