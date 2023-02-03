import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterSlice } from './filterSlice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


    export const store = configureStore({
    reducer: {
        contact: contactsReducer,
        filter: filterSlice.reducer,
    },
    middleware (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          });
    },
});

export const persistor = persistStore(store);