'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';

import { selectCompaniesValue } from '@/redux/features/companiesSlice';
import { Company } from '@/models/company';

export default function CompaniesList() {
  const companies = useSelector(selectCompaniesValue);

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
