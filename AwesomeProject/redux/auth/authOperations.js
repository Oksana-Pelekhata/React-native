import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
// import { getAuth } from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {auth} from '../../config'

// const auth = getAuth();


export const register = createAsyncThunk(
  "auth/signUp",
  async ({ email, password, displayName }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      );

      const { user } = userCredential;

      const {
        displayName: userName,
        email: userEmail,
        accessToken,
        uid,
      } = user;

      return { userEmail, accessToken, userName, photoUri, uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// export const register = createAsyncThunk(
//   'auth/register',
//   async ({userName, email, password }, thunkAPI) => {
//     try {
//         await createUserWithEmailAndPassword(auth, email, password);
//         await updateProfile(auth.currentUser, { displayName: userName });

//       return {
//         displayName: auth.currentUser.displayName,
//         email: auth.currentUser.email,
//         uid: auth.currentUser.uid,
//       };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});