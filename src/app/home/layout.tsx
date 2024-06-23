import type { Metadata } from "next";
import Link from "next/link";
import Profile from "@/components/home/profile";
export const metadata: Metadata = {
    title: "Home",
    description: "Gluon home page",
  };


  export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
            <main className="flex flex-col md:flex-row h-screen">
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"></link>
        
        <div style={{position: "relative", fontFamily: "EB Garamond"}} className="flex flex-col w-full h-full p-2 overflow-hidden">
            <div style={{
                content: '""',
                backgroundImage: 'url("https://raw.githubusercontent.com/Makul0/Assets-store-almera/main/formbg2.jpg")',
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}></div>
             <header className="flex justify-between items-center p-4">
          <div className="flex ml-4 space-x-6">
            <div className="text-xl text-black bg-white p-2 font-medium hover:underline ">
            <Profile />

            </div>
          </div>
          <div className="flex bg-white max-w-22 text-black text-xl ml-8 justify-between ">
           <div className="flex flex-grow items-center justify-center p-2">
               Publish your own paper
             </div>
           <Link href="/publish">
            <div className="flex flex-grow items-center justify-center bg-black text-white p-2">
            Go!
             </div></Link>
             </div>
        </header>
           {children}
        </div>

        <div className="w-full md:w-1/2 h-full bg-black items-start">
        <img src="https://raw.githubusercontent.com/Makul0/Assets-store-almera/main/astro3.jpg" alt="" className="w-full"/>
        <footer className="w-full flex fixed bottom-1 p-4 space-x-5">
			<Link href="">
      <button className="text-white hover:underline ">
        About 
      </button></Link>
      <Link href="">
      <button className="text-white hover:underline ">
        Terms & Conditions
      </button></Link>
      <Link href="">
      <button className="text-white hover:underline fixed right-4 ">
        Contact
      </button></Link>
		</footer>
        </div>
      </main>
			</body>
		</html>
	);
}