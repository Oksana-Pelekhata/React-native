import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../config';
import { createAsyncThunk } from "@reduxjs/toolkit";


  
export const addPost = createAsyncThunk(
  "comments/add",
    async (newComment) => {
         try {
          const docRef = await addDoc(collection(db, 'comments'), newComment);
          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
            throw e;
        }
    }
);

export const getAllComments = createAsyncThunk(
    "comments/all", async () => {
    try {
        const snapshot = await getDocs(collection(db, 'comments'));

        let commentsArray = [];
      if (snapshot) {
          snapshot.forEach(doc => {
        console.log(`${doc.id} =>`, doc.data())
          commentsArray.push({ id: doc.id, ...doc.data() });
        });
      }
      return commentsArray;

    } catch (error) {
      console.log(error);
            throw error;
    }
  }
)