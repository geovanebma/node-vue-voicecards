// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, update, child } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBxa9tpT4SytZnwF-Cw7zTeC8_JkzjEpu8",
  authDomain: "flashcards-voice.firebaseapp.com",
  databaseURL: "https://flashcards-voice-default-rtdb.firebaseio.com",
  projectId: "flashcards-voice",
  storageBucket: "flashcards-voice.appspot.com",
  messagingSenderId: "1024209874964",
  appId: "1:1024209874964:web:8cb056825e6b19566a3701",
  measurementId: "G-F4J1WPX1G5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, update, child };
