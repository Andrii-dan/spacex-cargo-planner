import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Shipment } from '@/models/shipment';
import { RootState } from '../store';

type initialState = {
  value: Shipment[];
  loading: boolean;
};

const initialState: initialState = {
  value: [],
  loading: false,
};

export const shipments = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    setShipments: (state, action: PayloadAction<Shipment[]>) => {
      state.value = action.payload;
    },
    updateShipment: (
      state,
      action: PayloadAction<{ id: string; updatedShipment: Shipment }>,
    ) => {
      const { id, updatedShipment } = action.payload;

      // Find the index of the shipment to update
      const index = state.value.findIndex((shipment) => shipment.id === id);

      if (index !== -1) {
        // Replace the old shipment with the updated shipment
        state.value[index] = updatedShipment;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Selector function to get a shipment by its id
export const selectShipmentById =
  (shipmentId: string) => (state: RootState) => {
    return state.shipments.value.find((shipment) => shipment.id === shipmentId);
  };

export const { setShipments, updateShipment, setLoading } = shipments.actions;
export const selectShipmentsValue = (state: RootState) => state.shipments.value;
export const selectShipmentsLoading = (state: RootState) =>
  state.shipments.loading;

export default shipments.reducer;
