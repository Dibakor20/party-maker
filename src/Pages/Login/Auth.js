import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./FirebaseConfig";


export const initializeLoginFramwork = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}
// Sign In with Google

export const handleGoogleSignIn = ()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {
    const {displayName,email,photoURL} = result.user;
    console.log(displayName,email)
    const signInUser = {
        isSignIn:true,
        userName:displayName,
        email:email,
        photo:photoURL,
    }
    return signInUser
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}