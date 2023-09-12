'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectShipmentsValue } from '@/redux/features/shipmentsSlice';

// Components
import ActionButton from '@/components/shared/ActionButton';
import Snackbar from '@/components/shared/Snackbar';

export default function SaveButton() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('Saved successfully!');

  const shipments = useSelector(selectShipmentsValue);

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleSaveShipments = () => {
    try {
      localStorage.setItem('shipments', JSON.stringify(shipments));
      setShowSnackbar(true);
    } catch (error) {
      console.error('Error saving data to local storage:', error);
      setSnackbarMessage('An error occurred while saving data.');
      setShowSnackbar(true);
    }
  };

  return (
    <>
      <ActionButton func={handleSaveShipments} text='Save' />
      <Snackbar
        isOpen={showSnackbar}
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
        duration={4000}
      />
    </>
  );
}
