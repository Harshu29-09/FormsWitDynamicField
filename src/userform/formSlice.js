import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData.push(action.payload);
    },
  },
});

export const { addFormData } = formSlice.actions;

export const selectFormData = (state) => state.form.formData;

export default formSlice.reducer;
