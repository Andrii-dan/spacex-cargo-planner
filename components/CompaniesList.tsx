'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCompaniesLoading,
  selectCompaniesValue,
  setCompanies,
} from '@/redux/features/companiesSlice';
import { selectSearchValue } from '@/redux/features/searchSlice';
import LoadingMessage from './LoadingMessage';
import { Company } from '@/models/company';

export default function CompaniesList() {
  const companies = useSelector(selectCompaniesValue);
  const searchQuery = useSelector(selectSearchValue);
  const loading = useSelector(selectCompaniesLoading);

  const dispatch = useDispatch();

  const noDataMessage =
    "It seems you don't have any locally saved shipments yet. To load your shipments from the network, simply click the 'Load' button.";

  // Filter the companies based on the search query
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const storedData = localStorage.getItem('companies');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(setCompanies(parsedData));
    }
  }, [dispatch]);

  if (loading) {
    return <LoadingMessage />;
  }

  return (
    <>
      {companies.length ? (
        <ul>
          {filteredCompanies.map((company: Company) => {
            return (
              <li key={company.id}>
                <Link href={`/${company.id}`}>{company.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="flex h-full w-full items-center text-center text-gray-700">
          {noDataMessage}
        </p>
      )}
    </>
  );
}
