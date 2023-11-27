import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADta2nYb1oHnPgPbRYu41jPibg7DvUbsA",
    authDomain: "blocodenotas-a76d2.firebaseapp.com",
    projectId: "blocodenotas-a76d2",
    storageBucket: "blocodenotas-a76d2.appspot.com",
    messagingSenderId: "604481604881",
    appId: "1:604481604881:web:5ca710d2883b8cec2090b0"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);