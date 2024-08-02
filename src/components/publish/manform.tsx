"use client"
import React, {useEffect} from "react";
import Link from "next/link";


export default function Manform() {
  useEffect(() => {

  },);
  return (
    <div className="flex flex-grow items-center justify-center space-x-8 p-8 w-1/2">
          <div className="bg-black text-white p-4 flex flex-col justify-between w-full ">
          <span className="flex select-none text-2xl">title *</span>
          <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block mt-2 flex-1 border-0 bg-white text-black text-xl p-2 w-full"
                    placeholder="experiment with quantum computer"
                  />
            <div className="col-span-full">
              <label htmlFor="about" className="block text-xl font-medium leading-6 text-white mt-4">
                Article *
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={2}
                  className="block w-full border-0 p-2 text-black text-xl"
                  defaultValue={''}
                />
              </div>
              <p className="mt-2 text-md text-white">Write a few sentences about your work.</p>
            </div>
           
           
            <div className="flex justify-end p-2">
              <Link href="">
                <button className="bg-white text-black px-4 py-2">
                  Publish
                </button>
              </Link>
            </div>
            {/* <div className="flex justify-end p-2">
              
                <button className="bg-white text-black px-4 py-2">
                  <EditModal />
                </button>
              
            </div> */}
          </div>
        </div>
  );
}