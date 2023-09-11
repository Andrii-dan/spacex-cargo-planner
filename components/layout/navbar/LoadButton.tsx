'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setCompanies, setLoading } from '@/redux/features/companiesSlice';
import ActionButton from '../../ActionButton';

export default function LoadButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const getCompaniesData = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await fetch('http://localhost:4000/shipments');

      const result = await response.json();

      dispatch(setCompanies(result));

      router.push('/');
    } catch (err) {
      console.error(err);
    }
    dispatch(setLoading(false));
  }, [dispatch, router]);

  return <ActionButton func={getCompaniesData} text="Load" />;
}
