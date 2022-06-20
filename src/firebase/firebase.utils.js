import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

// web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyCEGr2jMNbWnUy2UXkCEYpp8aFy7p07Vio',
  authDomain: 'react-ecom-app-d5d61.firebaseapp.com',
  projectId: 'react-ecom-app-d5d61',
  storageBucket: 'react-ecom-app-d5d61.appspot.com',
  messagingSenderId: '198496261875',
  appId: '1:198496261875:web:6a9d07d9b9296c9783c986',
};

// Initialize Firebase
initializeApp(config);

const provider = new GoogleAuthProvider();

export const auth = getAuth();

//Sign In with Google
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

// Create User with Email and Password
export const signUpWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

export const SignInWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
