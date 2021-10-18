import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAEpcCGC34r5855v6kjdPxHtEwTFtWAzc",
  authDomain: "sa-health-carecenter.firebaseapp.com",
  projectId: "sa-health-carecenter",
  storageBucket: "sa-health-carecenter.appspot.com",
  messagingSenderId: "457529811501",
  appId: "1:457529811501:web:34ff0845f0e43e03348ea4",
};

const FirebaseInit = () => initializeApp(firebaseConfig);

export default FirebaseInit;
