'use client'
import Image from "next/image";
import Link from "next/link";
import { Hero } from "./hero";
import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    User,
    signOut,
    GoogleAuthProvider, signInWithPopup
} from 'firebase/auth';
import { auth } from './firebaseconfig';
import Login from "@/components/signmodal";

export default function Welcome() {
  const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    const googleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
          const result = await signInWithPopup(auth, provider);
          // Ensure credential is not null before trying to access properties
          const credential = GoogleAuthProvider.credentialFromResult(result);
          if (credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              console.log("Google sign-in successful: ", user, "Access Token:", token);
          } else {
              console.log("No credentials returned from Google sign-in");
          }
      } catch (error) {
          if (error instanceof Error) {
              console.error("Error during Google sign-in:", error.message);
          } else {
              console.error("An unknown error occurred during Google sign-in.");
          }
      }
  };
  
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"></link>
      <div style={{position: "relative", fontFamily: "EB Garamond"}} className="flex flex-col w-full md:w-1/2 h-full ">
  <div style={{
    content: '""',
    backgroundImage: 'url("https://image.lexica.art/full_webp/2963c24d-80f7-4bcf-a7f7-7add1dfae1ef")',
    backgroundSize: "cover",
    filter: "brightness(80%) blur(1px)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  }}></div>
  <div className="p-16 h-74">
    <Hero />
  </div>
  <div className="flex flex-col items-center justify-center ">
  <div className="flex items-center justify-between space-x-4 bg-white p-4 w-96 ">
      <Login />
      <Link href="/home"><button className="text-black text-xl">Log in with Google</button></Link>
      <Link href="/home"><button onClick={googleLogin} className="bg-black text-white p-2">
        ➔
      </button>
      </Link>
    </div>
  </div>
</div>

      <div className="flex w-full md:w-1/2 h-1/2 md:h-full bg-black items-center justify-center">
        <Image
          className=" relative p-12"
          src="/g.svg"
          alt="Descriptive Alt Text"
          width={380}
          height={380}
        />
      </div>
    </main>
  );
}