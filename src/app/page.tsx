import Image from "next/image";
import Link from "next/link";
import { Hero } from "./hero";

export default function Welcome() {
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
  <div className="flex flex-1 p-12">
    <Hero />
  </div>
  <div className="flex flex-col items-center space-y-4 mb-16">
  <div className="flex items-center justify-between space-x-4 bg-white p-4 w-96 ">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 flex-grow text-black"
      />
      <button className="bg-black text-white p-2">
        ➔
      </button>
      <div className="text-black">G</div>
    </div>
    <div className="flex items-center justify-between space-x-4 bg-white p-4 w-96 ">
      <span className="flex-grow text-black">Explore without sign in</span>
      <Link href="/home"><button className="bg-black text-white p-2">
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