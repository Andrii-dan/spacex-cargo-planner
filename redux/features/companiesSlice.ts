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
    updateCompany: (
      state,
      action: PayloadAction<{ id: string; updatedCompany: Company }>,
    ) => {
      const { id, updatedCompany } = action.payload;

      // Find the index of the company to update
      const index = state.value.findIndex((company) => company.id === id);

      if (index !== -1) {
        // Replace the old company with the updated company
        state.value[index] = updatedCompany;
      }
    },
  },
});

// Selector function to get a company by its id
export const selectCompanyById = (companyId: string) => (state: RootState) => {
  return state.companies.value.find((company) => company.id === companyId);
};

export const { setCompanies, updateCompany } = companies.actions;
export const selectCompaniesValue = (state: RootState) => state.companies.value;

export default companies.reducer;
