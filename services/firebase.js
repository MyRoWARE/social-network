import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_DB_API_KEY,
  authDomain: 'meetmax-d2df1.firebaseapp.com',
  projectId: 'meetmax-d2df1',
  storageBucket: 'meetmax-d2df1.appspot.com',
  messagingSenderId: '556019494415',
  appId: '1:556019494415:web:760132b3e708ba4f5ffd7a',
};

// init firebase app
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);
