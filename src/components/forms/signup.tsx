'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from "react";
import { Input, Button } from "@nextui-org/react";


export default function SignUp() {

    return (
        <form className="max-w-md mx-auto mt-10 p-8  ">
            <div className="mb-6 text-black">
            {/* {user ? `Logged in as ${user.email}` : 'Please log in'} */}
            <input name="username" type="text" className="w-full text-gray-800 text-sm  px-4 py-3 " placeholder="Enter email " />
            </div>
            <div className="mb-6 relative">
                 <input name="password" type="password" className="w-full text-gray-800 text-sm  px-4 py-3 " placeholder="Enter your password"  />
            </div>
            <Link href="/home"> <Button  className="w-full text-white text-2xl bg-black p-2 ">Sign Up!</Button></Link>
        </form>
    );
}
