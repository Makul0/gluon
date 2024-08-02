import Image from "next/image";
import Link from "next/link";
import Homehero from "@/components/home/hero";

export default function Explore() {
    return (
        <main className="flex flex-col md:flex-row h-screen">
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"></link>
      <div style={{position: "relative", fontFamily: "EB Garamond"}} className="flex flex-col w-full h-full ">
  <div style={{
    content: '""',
    backgroundImage: 'url("https://image.lexica.art/full_webp/bbb9dc5a-5a90-4d0c-a225-b0c36e3959df")',
    backgroundSize: "cover",
    filter: "brightness(70%) blur(1px)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  }}></div>
  <div className="relative p-16 h-74 space-y-3">
    <h1 className="text-4xl">
        explore
    </h1>
    <h2 className="text-5xl">
        Welcome!
    </h2>
    <p className="text-3xl font-bold mt-4">
        to the modern science era <br></br>  where you are allowed to publish and <br></br>  explore research on
    </p>
    <p className="text-4xl animate-pulse underline">Blockchain</p>
  </div>
</div>

     
    </main>
    );
}
