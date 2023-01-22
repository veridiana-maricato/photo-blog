
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB06ekzz0lm4wSAFpEhCMDyNdOlXrMo0xM",
  authDomain: "miniblog-efc66.firebaseapp.com",
  projectId: "miniblog-efc66",
  storageBucket: "miniblog-efc66.appspot.com",
  messagingSenderId: "499881054313",
  appId: "1:499881054313:web:ac1ceb388c324198dc12f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };