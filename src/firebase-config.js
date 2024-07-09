import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAe-rFMJulxvlv2-5LydbQOojkvHdV8qFc",
    authDomain: "fir-tutorial-86349.firebaseapp.com",
    projectId: "fir-tutorial-86349",
    storageBucket: "fir-tutorial-86349.appspot.com",
    messagingSenderId: "289601331995",
    appId: "1:289601331995:web:135262ba7c481a330629be",
    measurementId: "G-WHNTB6SV0C"
  };
  const app=initializeApp(firebaseConfig);

  export const db=getFirestore(app);