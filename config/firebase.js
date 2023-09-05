// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {collection,getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoLClyn3FC-4h_B0sxgswxvPhDAuUa_og",
  authDomain: "shoe-app-dea73.firebaseapp.com",
  projectId: "shoe-app-dea73",
  storageBucket: "shoe-app-dea73.appspot.com",
  messagingSenderId: "876434202097",
  appId: "1:876434202097:web:ac3a641b1173ad869c3850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)
export const db = getFirestore(app)

export default app;