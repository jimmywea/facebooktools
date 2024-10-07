import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "toolfacebook-32406.firebaseapp.com",
  projectId: "toolfacebook-32406",
  storageBucket: "toolfacebook-32406.appspot.com",
  messagingSenderId: "1029188091749",
  appId: "1:1029188091749:web:cda12b2a147fdb09162b8c",
  measurementId: "G-2KJW6C5VT6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
