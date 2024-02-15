import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../userform/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
