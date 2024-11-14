// components/ProgressBar.js
import { Progress } from '@chakra-ui/react';

function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <Progress value={progress} mb="5" />
  );
}

export default ProgressBar;
