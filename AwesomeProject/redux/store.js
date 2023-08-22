import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authReducer } from './auth/authSlice';
import { postsReducer } from './posts/postSlice';
import { CommentsReducer } from './comments/commentsSlice';


const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

//const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
    auth: persistReducer(persistConfig, authReducer),
    posts: postsReducer,
    comments: CommentsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

