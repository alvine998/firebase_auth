import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAyiA_IdlliSfLgayDNztnq2dMYoGFIWbc",
    authDomain: "basicchat-c83b5.firebaseapp.com",
    projectId: "basicchat-c83b5",
    storageBucket: "basicchat-c83b5.appspot.com",
    messagingSenderId: "283264780179",
    appId: "1:283264780179:web:4c268572242d04ad9d8a66",
    measurementId: "G-J0KM1NQSQ2"
  };

  export const app = initializeApp(firebaseConfig);