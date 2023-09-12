import Link from 'next/link';
import { Shipment } from '@/models/shipment';

type Props = {
  shipmentsToRender: Shipment[];
};

export default function ShipmentsList({ shipmentsToRender }: Props) {
  return (
    <ul className='p-4'>
      {shipmentsToRender.map((shipment: Shipment) => {
        return (
          <li className='py-1 underline' key={shipment.id}>
            <Link href={`/${shipment.id}`}>{shipment.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
