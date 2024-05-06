import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDo82qj_MVfA88Sm_EcL-8T87qJ_02kEOI",
  authDomain: "website-1f8d3.firebaseapp.com",
  projectId: "website-1f8d3",
  storageBucket: "website-1f8d3.appspot.com",
  messagingSenderId: "654503054751",
  appId: "1:654503054751:web:3c54bdbf20c55efe0f81aa",
  measurementId: "G-65X7SKWDBK",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
