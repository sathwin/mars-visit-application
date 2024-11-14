// pages/index.js
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Step1PersonalInfo from '../components/Step1PersonalInfo';
import Step2TravelPreferences from '../components/Step2TravelPreferences';
import Step3HealthSafety from '../components/Step3HealthSafety';
import Success from '../components/Success';
import ProgressBar from '../components/ProgressBar';

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <Box p={5}>
      <ProgressBar step={step} />
      {step === 1 && <Step1PersonalInfo setStep={setStep} />}
      {step === 2 && <Step2TravelPreferences setStep={setStep} />}
      {step === 3 && <Step3HealthSafety setStep={setStep} />}
      {step === 4 && <Success />}
    </Box>
  );
}
