import { configureStore } from '@reduxjs/toolkit';

// Slices
import shipmentsSlice from './features/shipmentsSlice';
import searchSlice from './features/searchSlice';
import baysSlice from './features/baysSlice';

export const store = configureStore({
  reducer: {
    shipments: shipmentsSlice,
    search: searchSlice,
    bays: baysSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
