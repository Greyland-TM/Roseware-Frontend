import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import sessionReducer from './slices/sessionSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  middleware: [thunk],
});

export default store;
