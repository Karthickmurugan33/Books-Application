import { configureStore } from '@reduxjs/toolkit';
import bookSlice from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});
