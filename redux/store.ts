import { configureStore } from '@reduxjs/toolkit';

// Slices
import companiesSlice from './features/companiesSlice';
import baysSlice from './features/baysSlice';

export const store = configureStore({
  reducer: {
    companies: companiesSlice,
    bays: baysSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
