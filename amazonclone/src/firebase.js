import firebase from "firebase";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//keys
  apiKey: "AIzaSyCZQwiNy5TG1-jfaG2aXRCcQ2QnjbuI6M0",
  authDomain: "clone-de821.firebaseapp.com",
  databaseURL: "https://clone-de821.firebaseio.com",
  projectId: "clone-de821",
  storageBucket: "clone-de821.appspot.com",
  messagingSenderId: "509782923461",
  appId: "1:509782923461:web:6746f97904b386e73478ac",
  measurementId: "G-EJD03QGX29"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//const db = firebaseApp.firestore();
//setup databse instance
//expoerted auth to handle login and regiter
const auth = firebase.auth();

export {  auth };