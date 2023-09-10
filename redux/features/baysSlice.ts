import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type initialState = {
  value: number;
};

const initialState: initialState = {
  value: 0,
};

export const bays = createSlice({
  name: 'bays',
  initialState,
  reducers: {
    calculateBays: (state, action: PayloadAction<string | null>) => {
      const bayCapasity = 10;

      if (action.payload) {
        // Convert the string of numbers into an array of numbers
        const units = action.payload
          .split(',')
          .map(parseFloat)
          .filter((value) => !isNaN(value));

        // calculate the sum of all units in an array,
        const sumOfAllUnits = units.reduce((a, b) => a + b, 0);

        state.value = Math.ceil(sumOfAllUnits / bayCapasity);
      } else {
        state.value = 0;
      }
    },
  },
});

export const { calculateBays } = bays.actions;
export const selectBaysValue = (state: RootState) => state.bays.value;

export default bays.reducer;
