import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIBudcr916KAuIMkOq_SZ1bxwa-tke-1w",
  authDomain: "challenge-57e90.firebaseapp.com",
  projectId: "challenge-57e90",
  storageBucket: "challenge-57e90.appspot.com",
  messagingSenderId: "929944359290",
  appId: "1:929944359290:web:3ee42082becef51a3806c3",
  measurementId: "G-MLDCWBKQMJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
