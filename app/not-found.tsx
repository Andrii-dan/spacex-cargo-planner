import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='m-auto text-center'>
      <h2 className='text-3xl py-3 text-slate-900'>There was a problem.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the&nbsp;
        <Link href='/' className='underline text-primary'>
          Home page
        </Link>
      </p>
    </main>
  );
}
