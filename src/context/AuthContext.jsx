import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../components/firebase";
const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const signUp = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password);
	};
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);
	const value = { currentUser, signUp };
	return <AuthContext value={value}>{children}</AuthContext>;
};
