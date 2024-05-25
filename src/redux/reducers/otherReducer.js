import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    contactRequest: state => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    contactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    courseRequestRequest: state => {
      state.loading = true;
    },
    courseRequestSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    courseRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  },
});

export const {
  contactRequest,
  contactSuccess,
  contactFail,
  courseRequestRequest,
  courseRequestSuccess,
  courseRequestFail,
  clearError,
  clearMessage,
} = otherSlice.actions;
export default otherSlice.reducer;
