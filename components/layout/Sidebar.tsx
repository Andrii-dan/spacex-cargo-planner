import CompaniesList from '../CompaniesList';

export default function Sidebar() {
  return (
    <div className="flex flex-column w-96 m-6 shadow-lg shadow-slate-600 bg-background-primary border rounded-lg p-8 overflow-auto">
      <CompaniesList />
    </div>
  );
}
