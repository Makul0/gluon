"use client"
import React, {useEffect} from "react";
import Link from "next/link";



export default function Register() {
  useEffect(() => {

  },);
  return (
    <div className="flex flex-grow items-center justify-center space-x-8 p-8 w-full">
          <div className="bg-black text-white p-4 flex flex-col justify-between w-full ">
          <span className="flex select-none text-2xl">title *</span>
          <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block mt-2 flex-1 border-0 bg-white text-black text-xl p-2 w-72"
                    placeholder="experiment with quantum computer"
                  />
            <div className="col-span-full">
              <label htmlFor="about" className="block text-xl font-medium leading-6 text-white mt-4">
                Abstract *
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
            <div className="mb-3 w-96 mt-4">
          
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-white bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
           id="formFile"
          />
          <label
            htmlFor="formFile"
            className="mt-2 inline-block text-white dark:text-neutral-200"
          >
          Upload well edited file!
          </label>
      </div>
           
            <div className="flex justify-end p-2">
              <Link href="">
                <button className="bg-white text-black px-4 py-2">
                  Publish
                </button>
              </Link>
            </div>
          </div>
        </div>
  );
}