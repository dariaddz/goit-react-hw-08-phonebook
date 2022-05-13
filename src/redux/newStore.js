import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../redux/auth/auth-slice';
import { contactsApi } from 'redux/contactsApi';
import { filterSlice } from './FilterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
// персистер для авторизации

export const newStore = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(newStore);
