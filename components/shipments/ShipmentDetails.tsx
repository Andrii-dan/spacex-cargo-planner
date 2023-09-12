'use client';

import { notFound } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  selectShipmentById,
  updateShipment,
} from '@/redux/features/shipmentsSlice';
import { calculateBays, selectBaysValue } from '@/redux/features/baysSlice';
import { Shipment } from '@/models/shipment';

type Props = {
  shipmentId: string;
};

export default function ShipmentDetails({ shipmentId }: Props) {
  const dispatch = useDispatch();

  const shipment = useSelector(selectShipmentById(shipmentId)) as Shipment;
  const bays = useSelector(selectBaysValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const boxes = e.target.value;

    dispatch(
      updateShipment({
        id: shipmentId,
        updatedShipment: { ...shipment, boxes },
      }),
    );
  };

  useEffect(() => {
    dispatch(calculateBays(shipment?.boxes));
  }, [dispatch, shipment]);

  if (!shipment) {
    notFound();
  }

  return (
    <main className='flex flex-col w-full justify-row p-8 text-gray-700'>
      <h2 className='text-3xl py-2'>{shipment?.name}</h2>
      <p className='underline text-primary'>{shipment?.email}</p>
      <p className='py-8'>Number of required bays: {bays}</p>
      <div className='flex flex-col'>
        <label className='py-1' htmlFor='inputField'>
          Cargo boxes
        </label>
        <input
          className='w-80 p-1 px-3 rounded-md border-2 bg-slate-100 outline-primary text-text-primary'
          type='text'
          id='inputField'
          value={shipment?.boxes || ''}
          onChange={handleInputChange}
        />
      </div>
    </main>
  );
}
