import Link from 'next/link';

// Components
import SearchForm from './SearchForm';
import LoadButton from './LoadButton';
import SaveButton from './SaveButton';

export default function Navbar() {
  return (
    <nav className='flex justify-around items-center p-8 h-14 text-text-secondary bg-background-secondary'>
      <div className='w-2/4 sm:w-1/4'>
        <h1 className='text-xl'>
          <Link href='/'>Cargo Planner</Link>
        </h1>
      </div>
      <div className='hidden sm:flex justify-center md:w-2/4'>
        <SearchForm />
      </div>
      <div className='flex justify-end w-2/4 sm:w-1/4'>
        <LoadButton />
        <SaveButton />
      </div>
    </nav>
  );
}
