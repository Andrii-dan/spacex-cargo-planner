import { configureStore } from '@reduxjs/toolkit';

// Slices
import companiesSlice from './features/companiesSlice';

export const store = configureStore({
  reducer: {
    companies: companiesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
