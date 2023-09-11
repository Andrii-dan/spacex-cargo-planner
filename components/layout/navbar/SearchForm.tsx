'use client';

import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/redux/features/searchSlice';

export default function SearchForm() {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <input
      className="p-1.5 px-3 rounded-md w-3/4 outline-primary text-text-primary"
      type="text"
      aria-label="Search"
      id="search"
      placeholder="Search..."
      onChange={handleSearchInputChange}
    />
  );
}
