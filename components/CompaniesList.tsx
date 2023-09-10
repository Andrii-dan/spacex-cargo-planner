'use client';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCompaniesValue,
  setCompanies,
} from '@/redux/features/companiesSlice';
import { Company } from '@/models/company';
import { useEffect } from 'react';

export default function CompaniesList() {
  const companies = useSelector(selectCompaniesValue);

  const dispatch = useDispatch();

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
        {companies.map((company: Company) => {
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
