// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyCr5yz8D_iCwAYWW50ZKq9FfosJqe4aUz4',
  authDomain: 'awesomeproject-8b619.firebaseapp.com',
  databaseURL: 'https://awesomeproject-8b619.firebaseio.com',
  projectId: 'awesomeproject-8b619',
  storageBucket: 'awesomeproject-8b619.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);