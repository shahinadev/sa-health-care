import React, { useEffect, useState } from "react";
import FirebaseInit from "./../Firebase/Firebase";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
FirebaseInit();

const useFirebase = () => {
  //store auth user into user state
  const [user, setUser] = useState({});

  //handle date fetched or not
  const [isLoading, setIsLoading] = useState(true);

  //firebase auth
  const auth = getAuth();

  //handle google sign in
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //handle email and password auth
  const createAccountEmailAndPassword = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //handle LogOut
  const logOut = () => {
    signOut(auth).then((res) => {});
  };

  //handle on auth state changed
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    signInWithGoogle,
    createAccountEmailAndPassword,
    signInWithEmailPassword,
    user,
    isLoading,
    logOut,
  };
};

export default useFirebase;
