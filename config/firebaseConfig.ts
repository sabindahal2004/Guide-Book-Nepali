import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJEiJ_hTu_r3QWrqc9ytBkaVSkaqN4e_A",
  authDomain: "nepali-guide-book-see.firebaseapp.com",
  projectId: "nepali-guide-book-see",
  storageBucket: "nepali-guide-book-see.firebasestorage.app",
  messagingSenderId: "469360203863",
  appId: "1:469360203863:web:8079b3fe16ff5812d56b12",
  measurementId: "G-F8T9N760KL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);