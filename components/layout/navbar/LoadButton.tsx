'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setShipments, setLoading } from '@/redux/features/shipmentsSlice';
import ActionButton from '@/components/shared/ActionButton';

export default function LoadButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const getShipmentsData = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await fetch('http://localhost:4000/shipments');

      const result = await response.json();

      dispatch(setShipments(result));

      router.push('/');
    } catch (err) {
      console.error(err);
    }
    dispatch(setLoading(false));
  }, [dispatch, router]);

  return <ActionButton func={getShipmentsData} text='Load' />;
}
