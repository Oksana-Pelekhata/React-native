import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../config';
import { createAsyncThunk } from "@reduxjs/toolkit";


  
export const addPost = createAsyncThunk(
  "posts/add",
    async (newPost) => {
         try {
          const docRef = await addDoc(collection(db, 'posts'), newPost);
          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
            throw e;
        }
    }
);

export const getAllPosts = createAsyncThunk(
    "posts/all", async () => {
    try {
        const snapshot = await getDocs(collection(db, 'posts'));

        let postsArray = [];
      if (snapshot) {
          snapshot.forEach(doc => {
        console.log(`${doc.id} =>`, doc.data())
          postsArray.push({ id: doc.id, ...doc.data() });
        });
      }
      return postsArray;

    } catch (error) {
      console.log(error);
            throw error;
    }
  }
)

