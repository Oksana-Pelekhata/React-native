import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../config'
import { signOut } from 'firebase/auth'

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, displayName }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      );
      
      const { user } = userCredential;

      await updateProfile(user, {
        displayName: displayName,
      });

      const {
        displayName: userName,
        email: userEmail,
        accessToken,
        uid,
      } = user;

      return { userEmail, accessToken, userName, uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      const {
        displayName: userName,
        email: userEmail,
        accessToken,
        uid,
      } = user;


      return {
        userName,
        userEmail, 
        accessToken,
        uid
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
 
  try {

    await signOut(auth); 
    
  } catch (error) {

    return thunkAPI.rejectWithValue(error.message);

  }
});