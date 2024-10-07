import { auth } from "./firebase-config.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

export function googleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in:", user);
      document.getElementById("scanSection").style.display = "block";
      alert(`Chào mừng, ${user.displayName}!`);
    })
    .catch((error) => {
      console.error("Sign-in error:", error);
    });
}
