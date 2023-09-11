'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCompaniesValue } from '@/redux/features/companiesSlice';

// Components
import ActionButton from '../../ActionButton';
import Snackbar from '@/components/Snackbar';

export default function SaveButton() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('Saved successfully!');

  const companies = useSelector(selectCompaniesValue);

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleSaveCompanies = () => {
    try {
      localStorage.setItem('companies', JSON.stringify(companies));
      setShowSnackbar(true);
    } catch (error) {
      console.error('Error saving data to local storage:', error);
      setSnackbarMessage('An error occurred while saving data.');
      setShowSnackbar(true);
    }
  };

  return (
    <>
      <ActionButton func={handleSaveCompanies} text="Save" />
      <Snackbar
        isOpen={showSnackbar}
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
        duration={4000}
      />
    </>
  );
}
