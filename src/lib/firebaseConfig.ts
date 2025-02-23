import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB46p7QwExELQlC7oVZ5DuAQzVk3thiB4E",
  authDomain: "eh-conomy.firebaseapp.com",
  projectId: "eh-conomy",
  storageBucket: "eh-conomy.firebasestorage.app",
  messagingSenderId: "544095840010",
  appId: "1:544095840010:web:eb36540ea2e08436f57cf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
