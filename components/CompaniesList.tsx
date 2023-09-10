'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCompaniesValue,
  setCompanies,
} from '@/redux/features/companiesSlice';
import { Company } from '@/models/company';
import { selectSearchValue } from '@/redux/features/searchSlice';

export default function CompaniesList() {
  const companies = useSelector(selectCompaniesValue);
  const searchQuery = useSelector(selectSearchValue);

  const dispatch = useDispatch();

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

  return (
    <>
      <ul>
        {filteredCompanies.map((company: Company) => {
          return (
            <li key={company.id}>
              <Link href={`/${company.id}`}>{company.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
