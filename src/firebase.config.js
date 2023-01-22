// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaOytvz-0pj77eI0drzr_Qqcrh9fcLkpA',
  authDomain: 'house-marketplace-app-49066.firebaseapp.com',
  projectId: 'house-marketplace-app-49066',
  storageBucket: 'house-marketplace-app-49066.appspot.com',
  messagingSenderId: '722206594759',
  appId: '1:722206594759:web:f7500d282fca84d3ef90e2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
