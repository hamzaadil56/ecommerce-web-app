// Import the functions you need from the SDKs you need
import { ACTIONS } from "./Store/action";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4eCNKJx5FnUqaw3-9MkTqc5GNnLBY8qc",
  authDomain: "ecommerce-website-a03bc.firebaseapp.com",
  projectId: "ecommerce-website-a03bc",
  storageBucket: "ecommerce-website-a03bc.appspot.com",
  messagingSenderId: "255660706183",
  appId: "1:255660706183:web:9bce447eca6c8dbf63ab22",
  measurementId: "G-H71Z41FKYJ",
};

const app = initializeApp(firebaseConfig);

const googleLogin = () => {
  return (dispatch) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    console.log(dispatch, "dispatch");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        let user_data = {
          username: user.displayName,
          email: user.email,
          profile_pic: user.photoURL,
        };
        console.log(user_data);

        dispatch({ type: ACTIONS.AUTHENTICATION, payload: user_data });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
};
export { googleLogin };
