'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectShipmentsLoading,
  selectShipmentsValue,
  setShipments,
} from '@/redux/features/shipmentsSlice';
import { selectSearchValue } from '@/redux/features/searchSlice';

// Components
import LoadingMessage from '@/components/shared/LoadingMessage';
import ShipmentsList from './ShipmentsList';

export default function Shipments() {
  const shipments = useSelector(selectShipmentsValue);
  const searchQuery = useSelector(selectSearchValue);
  const loading = useSelector(selectShipmentsLoading);

  const dispatch = useDispatch();

  const noDataMessage =
    "It seems you don't have any locally saved shipments yet. To load your shipments from the network, simply click the 'Load' button.";

  // Filter the shipments based on the search query
  const filteredShipments = shipments.filter((shipment) =>
    shipment.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const storedData = localStorage.getItem('shipments');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(setShipments(parsedData));
    }
  }, [dispatch]);

  if (loading) {
    return <LoadingMessage />;
  }

  return (
    <div className='flex flex-col h-full'>
      <h2 className='text-center pb-1 text-gray-800 font-bold'>Shipments</h2>
      {shipments.length ? (
        <ShipmentsList shipmentsToRender={filteredShipments} />
      ) : (
        <p className='m-auto text-center text-gray-700'> {noDataMessage}</p>
      )}
    </div>
  );
}
