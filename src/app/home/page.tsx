import Image from "next/image";
import Link from "next/link";

export default function Home () {
    return (
        <main className="flex flex-col md:flex-row h-screen">
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"></link>
      <div className="flex w-full md:w-1/2 h-1/2 md:h-full bg-black items-center justify-center">
        
      </div>
      <div style={{position: "relative", fontFamily: "EB Garamond"}} className="flex flex-col w-full md:w-1/2 h-full ">
  <div style={{
    content: '""',
    backgroundImage: 'url("https://image.lexica.art/full_webp/73be5934-a2e2-4389-98d5-660fdbe9af40")',
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    right: 0,
    width: "85%",
    height: "100%",
    zIndex: -1,
  }}></div>
</div>
    </main>
    )
}