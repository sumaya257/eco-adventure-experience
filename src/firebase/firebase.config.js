// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFHdFe5B8o7LWeVwWHvmzM1SJpJgVV1fY",
  authDomain: "eco-adventure-experience-f3f62.firebaseapp.com",
  projectId: "eco-adventure-experience-f3f62",
  storageBucket: "eco-adventure-experience-f3f62.firebasestorage.app",
  messagingSenderId: "815691104524",
  appId: "1:815691104524:web:9eb04c9507da6cdc0dc929",
  measurementId: "G-4E7YKMVMEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app