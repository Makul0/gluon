import Image from "next/image";
import Link from "next/link";
import Homehero from "@/components/home/hero";

export default function Home() {
    return (
      <main className="flex flex-col md:flex-row h-screen">
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"></link>
        
        <div style={{position: "relative", fontFamily: "EB Garamond"}} className="flex flex-col w-full md:w-full h-full overflow-hidden">
            <div style={{
                content: '""',
                backgroundImage: 'url("https://raw.githubusercontent.com/Makul0/Assets-store-almera/main/formbg2.jpg")',
                backgroundSize: "cover",
                filter: "brightness(80%) blur(1px)",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}></div>
           <Homehero />
        </div>

        <div className="flex w-full md:w-1/2 h-full bg-black items-center justify-center">
        <img src="https://raw.githubusercontent.com/Makul0/Assets-store-almera/main/astro3.jpg" alt="" className="w-full"/>
        </div>
      </main>
    );
}
