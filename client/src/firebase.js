// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-88d56.firebaseapp.com",
  projectId: "blog-88d56",
  storageBucket: "blog-88d56.firebasestorage.app",
  messagingSenderId: "565221610500",
  appId: "1:565221610500:web:393e72217cd8840be1d151"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);