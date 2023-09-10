'use client';

import { useSelector } from 'react-redux';
import { selectCompaniesValue } from '@/redux/features/companiesSlice';

export default function Navbar() {
  const companies = useSelector(selectCompaniesValue);

  const handleSaveClick = () => {
    localStorage.setItem('companies', JSON.stringify(companies));
  };

  return (
    <nav className="flex justify-around items-center p-8 h-14 bg-slate-800">
      <h1>Cargo Planner</h1>
      <div className="w-2/4">
        <input
          className="p-1.5 px-3 rounded-2xl w-full"
          type="text"
          aria-label="Search"
          id="search"
          placeholder="Search"
        />
      </div>
      <div className="flex justify-end w-1/4">
        <button className="mx-2 p-1.5 px-4 border-2 rounded-2xl border-rose-500">
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
