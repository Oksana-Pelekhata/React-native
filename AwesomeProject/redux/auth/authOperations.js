import { createAsyncThunk } from '@reduxjs/toolkit';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const auth = getAuth();


export const register = createAsyncThunk(
  'auth/register',
  async ({userName, email, password }, thunkAPI) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, { displayName: userName });

      return {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);