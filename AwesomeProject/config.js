// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC436FmMys8XwRnJGR2v8gBpmuWVn-I5NY",
  authDomain: "awesomeproject-8b619.firebaseapp.com",
  databaseURL: "https://awesomeproject-8b619-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "awesomeproject-8b619",
  storageBucket: "awesomeproject-8b619.appspot.com",
  messagingSenderId: "468316360050",
  appId: "1:468316360050:web:be8f35ea56657504cba1eb",
  measurementId: "G-Q2H2WBFXGQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);