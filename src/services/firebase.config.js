import firebase from 'firebase';

// Configure Firebase
export const config = {
  apiKey: "AIzaSyAjzxv6a-PYOdKg6TR5PKqmgt_YZtMP9Ck",
  authDomain: "perseus-clothes.firebaseapp.com",
  databaseURL: "https://perseus-clothes.firebaseio.com",
  projectId: "perseus-clothes",
  storageBucket: "perseus-clothes.appspot.com",
  messagingSenderId: "186265927026",
  appId: "1:186265927026:web:2c20a2e4787b4fbaedf1eb",
  measurementId: "G-8NMGZ3YF0G"

};

// Configure FirebaseUI.
export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
