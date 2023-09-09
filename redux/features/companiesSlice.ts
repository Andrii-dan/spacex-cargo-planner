import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from '@/models/company';
import { RootState } from '../store';

type initialState = {
  value: Company[];
};

const initialState: initialState = {
  value: [],
};

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
export const selectValue = (state: RootState) => state.companies.value;

export default companies.reducer;
