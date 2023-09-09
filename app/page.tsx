'use client';

import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from '@/redux/features/companiesSlice';

export default function Home() {
  const dispatch = useDispatch();

  const companies = useSelector(selectValue);

  const welcomeMessage = companies.length
    ? 'Get started by picking a company from the left sidebar.'
    : "It seems you don't have any locally saved shipments yet. To load your shipments from the network, simply click the 'Load' button.";

  return (
    <main className="flex min-h-screen flex-col w-full justify-center items-center p-6 border-2 bg-sky-900">
      <h2 className='w-1/3 text-center text-xl'>{welcomeMessage}</h2>
    </main>
  );
}
