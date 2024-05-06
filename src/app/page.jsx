"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

export default function Home() {
  const [user] = useAuthState(auth);

  console.log(user);
  return (
    <>
      <h1>Welcome to page</h1>
    </>
  );
}
