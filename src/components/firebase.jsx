import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
	// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	// appId: process.env.REACT_APP_FIREBASE_APP_ID,
	apiKey: "AIzaSyB3l91Im4J5UhYAzr0YaPzPQEF4-cf327Y",
	authDomain: "auth-development-88ead.firebaseapp.com",
	projectId: "auth-development-88ead",
	storageBucket: "auth-development-88ead.appspot.com",
	messagingSenderId: "1034919669345",
	appId: "1:1034919669345:web:4598711cc741c5b585c420",
});

export const auth = app.auth();
export default app;
