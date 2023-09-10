'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  selectCompanyById,
  updateCompany,
} from '@/redux/features/companiesSlice';
import { calculateBays, selectBaysValue } from '@/redux/features/baysSlice';
import { Company } from '@/models/company';

type Props = {
  params: { companyId: string };
};

export default function Company({ params }: Props) {
  const { companyId } = params;

  const dispatch = useDispatch();

  const company = useSelector(selectCompanyById(companyId)) as Company;
  const bays = useSelector(selectBaysValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const boxes = e.target.value;

    dispatch(
      updateCompany({ id: companyId, updatedCompany: { ...company, boxes } }),
    );
  };

  useEffect(() => {
    dispatch(calculateBays(company?.boxes));
  }, [dispatch, company]);

  return (
    <main className="flex flex-col w-full justify-row p-8 border-2 bg-sky-900">
      <h2 className="text-3xl py-2">{company?.name}</h2>
      <p className="underline">{company?.email}</p>
      <p className="py-8">Number of required bays {bays}</p>
      <div className="flex flex-col">
        <label className="py-1" htmlFor="inputField">
          Cargo boxes
        </label>
        <input
          className="w-80 text-black p-1"
          type="text"
          id="inputField"
          value={company?.boxes || ''}
          onChange={handleInputChange}
        />
      </div>
    </main>
  );
}
