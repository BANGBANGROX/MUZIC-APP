import { configureStore } from '@reduxjs/toolkit';
import { shazaamCoreApi } from './services/shazaamCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazaamCoreApi.reducerPath]: shazaamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazaamCoreApi.middleware),
});
