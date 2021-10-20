import React, { useEffect, useState } from "react";
import FirebaseInit from "./../Firebase/Firebase";
import { useHistory, useLocation } from "react-router";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
FirebaseInit();

const useFirebase = () => {
  //store auth user into user state
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  //handle data fetched or not
  const [isLoading, setIsLoading] = useState(true);

  //handle redirect
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/";

  //firebase auth
  const auth = getAuth();

  //handle google sign in
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //handle email and password auth
  const createAccountEmailAndPassword = ({ email, password, username }) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //update profile for set the username
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then((res) => {
            history.push(redirect_uri);
          })
          .catch((err) => setError(err.message));

        //send email verification link
        sendEmailVerification(auth.currentUser)
          .then((res) => {
            setMessage("Please verity your email address");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signInWithEmailPassword = ({ email, password }) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setMessage("Sign In Successfully., redirect in 1 seconds");
        setTimeout(() => {
          history.push(redirect_uri);
        }, 1000);
      })
      .catch((err) => {
        if (err.message.includes("user-not-found")) {
          setError("No user found with those info.");
        } else if (err.message.includes("password-not-match")) {
          setError("Password not match..");
        } else {
          setError(err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        setError("");
      } else {
        setUser({});
        setMessage("");
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
    error,
    message,
  };
};

export default useFirebase;
