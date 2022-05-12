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
// import contactsReducer from './phonebook-reducers';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
// персистер для авторизации

export const newStore = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(newStore);
