'use client'
import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    User,
    signOut,
    GoogleAuthProvider, signInWithPopup
} from 'firebase/auth';
import { auth } from '../../app/firebaseconfig';

import React from "react";
import {Button } from "@nextui-org/react";
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
      });
      return () => unsubscribe();
  }, []);

  const signup = async () => {
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log("User created: ", userCredential.user);
      } catch (error) {
          if (error instanceof Error) {
              console.error("Error signing up:", error.message);
          } else {
              console.error("An unknown error occurred.");
          }
      }
  };

  const login = async () => {
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log("User logged in: ", userCredential.user);
      } catch (error) {
          if (error instanceof Error) {
              console.error("Error logging in:", error.message);
          } else {
              console.error("An unknown error occurred.");
          }
      }
  };

  const logout = async () => {
      try {
          await signOut(auth);
          console.log("User logged out");
      } catch (error) {
        if (error instanceof Error) {
            console.error("Error logging out:", error.message);
        } else {
            console.error("An unknown error occurred.");
        }
    }
};





    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <form className="max-w-md mx-auto mt-10 p-8 shadow-lg ">
            <div className="mb-6 text-black">
            {/* {user ? `Logged in as ${user.email}` : 'Please log in'} */}
            <input name="username" type="text" onChange={e => setEmail(e.target.value)} className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-black" placeholder="Enter email " />
            </div>
            <div className="mb-6 relative">
                 <input name="password" type="password" onChange={e => setPassword(e.target.value)} className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter your password"  />
            </div>
            <Link href="/home"><Button onClick={login} className="w-full text-white text-2xl bg-black p-2 bg-opacity-50">Login</Button></Link>
        </form>
    );
}
