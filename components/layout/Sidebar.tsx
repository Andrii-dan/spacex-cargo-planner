import Shipments from '../shipments/Shipments';

export default function Sidebar() {
  return (
    <nav className='w-full sm:w-96 h-60 sm:h-full px-6 pt-2 overflow-auto border-b sm:border-r bg-slate-50'>
      <Shipments />
    </nav>
  );
}
