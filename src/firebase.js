

// firebase.js
import { initializeApp } from 'firebase/app';  // Firebase SDK modullarini import qilish
import { getDatabase } from 'firebase/database';  // Realtime Database uchun modul

// Firebase konfiguratsiyasi (bu qiymatlar sizning Firebase loyihangizdan olinadi)
const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://FIREBASE_PROJECT_ID.firebaseio.com",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Firebase dasturini ishga tushirish
const app = initializeApp(firebaseConfig);

// Realtime Database instantsiyasini olish
const database = getDatabase(app);

export { database };
