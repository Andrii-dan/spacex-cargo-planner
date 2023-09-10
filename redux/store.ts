import { configureStore } from '@reduxjs/toolkit';

// Slices
import companiesSlice from './features/companiesSlice';
import searchSlice from './features/searchSlice';
import baysSlice from './features/baysSlice';

export const store = configureStore({
  reducer: {
    companies: companiesSlice,
    search: searchSlice,
    bays: baysSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
