import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBHs2rXEzSDtahsQpHy-uQGo_ObJVVf7Xc",
  authDomain: "bookify-4f52d.firebaseapp.com",
  projectId: "bookify-4f52d",
  storageBucket: "bookify-4f52d.appspot.com",
  messagingSenderId: "579411303268",
  appId: "1:579411303268:web:66b25cdc18f758ea86b871",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user=>{
      if(user) setUser(user);
      else setUser(null);
    })
    
  }, [])
  

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const isLoggedin = user ? true:false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signinWithGoogle,
        isLoggedin
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
