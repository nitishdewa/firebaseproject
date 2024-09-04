import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb2Sr_nPwaBC1EqUNjpZTC3LoyO2sHEmI",
  authDomain: "techpractise-e4ff5.firebaseapp.com",
  projectId: "techpractise-e4ff5",
  storageBucket: "techpractise-e4ff5.appspot.com",
  messagingSenderId: "722852958989",
  appId: "1:722852958989:web:cbb6ffbe0b20dee09f1644"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
