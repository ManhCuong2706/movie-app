// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDCnD-O7eel6sncu0TXRS71XDQ2xHMv2PI',
  authDomain: 'netflix-clone-nov.firebaseapp.com',
  projectId: 'netflix-clone-nov',
  storageBucket: 'netflix-clone-nov.appspot.com',
  messagingSenderId: '919162935089',
  appId: '1:919162935089:web:19c3467f971a2040648210',
  measurementId: 'G-FZ1Y8E4D4R',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
