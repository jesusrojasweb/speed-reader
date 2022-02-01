import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe1PtNO1XshcYWOUVy_0zbNCfQtYjh2i8",
  authDomain: "speed-reading-jesusrojasweb.firebaseapp.com",
  projectId: "speed-reading-jesusrojasweb",
  storageBucket: "speed-reading-jesusrojasweb.appspot.com",
  messagingSenderId: "738875400030",
  appId: "1:738875400030:web:3c0e2626412951041639cf",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
