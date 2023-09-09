import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from '@/models/company';

type initialState = {
  value: Company[];
};

const initialState = {
  value: [],
} as initialState;

export const companies = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<Company[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setCompanies } = companies.actions;
export default companies.reducer;
