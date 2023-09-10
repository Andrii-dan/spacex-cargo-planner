'use client';

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCompaniesValue,
  setCompanies,
} from '@/redux/features/companiesSlice';
import { setSearchQuery } from '@/redux/features/searchSlice';

export default function Navbar() {
  const companies = useSelector(selectCompaniesValue);

  const dispatch = useDispatch();

  const handleSaveClick = () => {
    localStorage.setItem('companies', JSON.stringify(companies));
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    dispatch(setSearchQuery(searchQuery));
  };

  const getCompaniesData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:4000/shipments');

      const result = await response.json();

      dispatch(setCompanies(result));
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  return (
    <nav className="flex justify-around items-center p-8 h-14 bg-slate-800">
      <h1>Cargo Planner</h1>
      <div className="w-2/4">
        <input
          className="p-1.5 px-3 rounded-2xl w-full text-black"
          type="text"
          aria-label="Search"
          id="search"
          placeholder="Search..."
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="flex justify-end w-1/4">
        <button
          onClick={getCompaniesData}
          className="mx-2 p-1.5 px-4 border-2 rounded-2xl border-rose-500"
        >
          Load
        </button>
        <button
          onClick={handleSaveClick}
          className="mx-2 p-1.5 px-4 border-2 rounded-2xl border-rose-500"
        >
          Save
        </button>
      </div>
    </nav>
  );
}
