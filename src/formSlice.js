import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: (state) => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;

export default formSlice.reducer;
