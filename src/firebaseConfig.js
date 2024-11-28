import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbLLi2pGn8aXBKC3-265e3eWerpmldKME",
    authDomain: "jhonatancarreazoblog.firebaseapp.com",
    projectId: "jhonatancarreazoblog",
    storageBucket: "jhonatancarreazoblog.firebasestorage.app",
    messagingSenderId: "233226821515",
    appId: "1:233226821515:web:e1e4891f61b9590244998e"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
