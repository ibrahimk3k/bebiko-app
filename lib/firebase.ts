import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2i-7eM_6ZQo5ciVmXDAATryiYcAGBtJg",
  authDomain: "bebiko-3a6d2.firebaseapp.com",
  projectId: "bebiko-3a6d2",
  storageBucket: "bebiko-3a6d2.firebasestorage.app",
  messagingSenderId: "344317162137",
  appId: "1:344317162137:web:4c2943194d678c31bcbe08",
  measurementId: "G-S01BN04NJS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
