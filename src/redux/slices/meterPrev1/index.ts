import { createSlice } from '@reduxjs/toolkit';

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState: {
    values: [],
  },
  reducers: {
    setInputValue: (state, action) => {
      const { id, value } = action.payload;
      state.values[id] = value;
    },
    submitInputs: (state) => {
      console.log('Submitting inputs:', state.values);
    },
  },
});

export const { setInputValue, submitInputs } = inputsSlice.actions;

export default inputsSlice.reducer;