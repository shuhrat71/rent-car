import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: "rent-car-eafa2.firebasestorage.app",
  messagingSenderId: "756408065096",
  appId: "1:756408065096:web:8fd1e9b8a8bc91baae4c7d",
  measurementId: "G-W590TW82S7",
};
let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);
export { app, db };
