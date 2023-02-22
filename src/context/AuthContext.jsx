import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../components/firebase";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email, password) => {
    console.log("login 16");
    return auth.signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      console.log("Start user=====");
      setCurrentUser(user);
      console.log(currentUser);
    });
    console.log("user=====");
    return unsubscribe;
  }, []);
  const value = { currentUser, signUp, login };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
