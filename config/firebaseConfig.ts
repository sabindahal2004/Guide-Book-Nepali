import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqxNxECFMZV3j6FTPpPQ9lvxAcAbku0RY',
  authDomain: 'nepali-guide-class-10-see.firebaseapp.com',
  projectId: 'nepali-guide-class-10-see',
  storageBucket: 'nepali-guide-class-10-see.firebasestorage.app',
  messagingSenderId: '618710038926',
  appId: '1:618710038926:web:c9fff960f4df6a2ec04cdf',
  measurementId: 'G-59LG6MPZ94',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
