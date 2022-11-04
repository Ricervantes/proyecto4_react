import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";// traemos la importacion para trabajar con firestore

const firebaseConfig = {
  apiKey: "AIzaSyC4dlKyrwbXM-WmxGBYrLZ2wnHpp8EjIiY",
  authDomain: "restaurante-37661.firebaseapp.com",
  projectId: "restaurante-37661",
  storageBucket: "restaurante-37661.appspot.com",
  messagingSenderId: "788298962393",
  appId: "1:788298962393:web:a78220bc3f8f25d5ecb5c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)//exportamos nuestra configuracion de firostore