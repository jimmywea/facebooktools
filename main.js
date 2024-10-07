import { googleSignIn } from "./auth.js";
import { startScan } from "./scan.js";

document.getElementById("googleSignInBtn").addEventListener("click", googleSignIn);
document.getElementById("scanBtn").addEventListener("click", startScan);
