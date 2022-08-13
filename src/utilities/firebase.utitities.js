// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaDpFNKxsnm-rrXfun7eSXQ5qolJOoJzE",
  authDomain: "crwn-clothing-db-b68a9.firebaseapp.com",
  projectId: "crwn-clothing-db-b68a9",
  storageBucket: "crwn-clothing-db-b68a9.appspot.com",
  messagingSenderId: "104438948232",
  appId: "1:104438948232:web:c61f454a238df957e3da3d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  // if user does not exits
  // create user
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
