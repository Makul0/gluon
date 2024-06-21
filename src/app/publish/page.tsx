import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <main style={{ fontFamily: "EB Garamond",backgroundImage: 'url("https://image.lexica.art/full_webp/2963c24d-80f7-4bcf-a7f7-7add1dfae1ef")',
    backgroundSize: "cover",
    backgroundPosition: "center", }} className="flex flex-col md:flex-row h-screen text-black">
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"></link>
      <div className="relative flex flex-col md:flex-row w-full h-full">
        <Image
          className="relative w-full md:w-1/2 h-1/2 md:h-full object-cover"
          src="/astro6.jpg"
          alt="Descriptive Alt Text"
          width={500}
          height={500}
        />
        
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
            <div className="mt-4 flex text-xl leading-6 text-white ">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white text-black p-2 "
                    >
                      <span className="p-2">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
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

      </div>
    </main>
  );
}