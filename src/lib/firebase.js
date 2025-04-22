// src/lib/firebase.js
import { getFirestore } from "firebase/firestore";
import { app } from "../firebase/client";

// Export Firestore instance using the existing app
export const db = getFirestore(app);
