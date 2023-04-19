import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8e0R_-zBGAON7DIMyNM-KJJfRrZnOVFk",
  authDomain: "chat-43693.firebaseapp.com",
  projectId: "chat-43693",
  storageBucket: "chat-43693.appspot.com",
  messagingSenderId: "13816656530",
  appId: "1:13816656530:web:b5bb834463d9576ed7ac4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
