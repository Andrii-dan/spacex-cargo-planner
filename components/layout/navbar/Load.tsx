'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { setShipments, setLoading } from '@/redux/features/shipmentsSlice';

// Components
import ActionButton from '@/components/shared/ActionButton';
import Snackbar from '@/components/shared/Snackbar';

export default function Load() {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const getShipmentsData = useCallback(async () => {
    try {
      dispatch(setLoading(true));

      const apiUrl =
        process.env.NODE_ENV === 'production'
          ? '/data/shipments.json' // Production API URL
          : 'http://localhost:4000/shipments'; // Local API URL

      const response = await fetch(apiUrl);

      const result = await response.json();

      dispatch(setShipments(result.shipments || result));

      router.push('/');
    } catch (err) {
      console.error(err);
      setShowSnackbar(true);
    }
    dispatch(setLoading(false));
  }, [dispatch, router]);

  return (
    <>
      <ActionButton func={getShipmentsData} text='Load' />
      <Snackbar
        isOpen={showSnackbar}
        message={'An error occurred while loading data.'}
        onClose={handleCloseSnackbar}
        duration={4000}
      />
    </>
  );
}
