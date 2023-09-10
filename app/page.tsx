'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCompaniesValue, setCompanies } from '@/redux/features/companiesSlice';

export default function Home() {
  const dispatch = useDispatch();

  const companies = useSelector(selectCompaniesValue);

  const welcomeMessage = companies.length
    ? 'Get started by picking a company from the left sidebar.'
    : "It seems you don't have any locally saved shipments yet. To load your shipments from the network, simply click the 'Load' button.";

  useEffect(() => {
    const storedData = localStorage.getItem('companies');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(setCompanies(parsedData));
    }
  }, [dispatch]);

  return (
    <main className="flex flex-col w-full justify-center items-center p-6 border-2 bg-sky-900">
      <h2 className="w-1/3 text-center text-xl">{welcomeMessage}</h2>
    </main>
  );
}
