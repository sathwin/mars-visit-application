// tests/validation.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Step1PersonalInfo from '../components/Step1PersonalInfo';

describe('Step1PersonalInfo', () => {
  test('renders form fields', () => {
    render(<Step1PersonalInfo setStep={() => {}} />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nationality/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
  });

  test('shows validation errors on submit with empty fields', async () => {
    render(<Step1PersonalInfo setStep={() => {}} />);
    fireEvent.click(screen.getByText(/Next/i));

    await waitFor(() => {
      expect(screen.getAllByRole('alert')).toHaveLength(5);
    });
  });
});
