import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Home",
    description: "Gluon earn page",
  };


  export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className="">
			<div className="absolute left h-screen w-20">
            <header className="bg-background rounded-full p-3 inline-flex items-center justify-center flex flex-col gap-y-3">
			 <Link href="/home"><HomeIcon className="flex w-8 h-8 text-primary"/></Link> 
             <Link href="/publish"><PenIcon className="flex w-6 h-6 text-primary " /></Link> 
			  <Link href="/explore"><CompassIcon className=" flex w-8 h-8 text-primary" /></Link>
			 <Link href="earn"> <DollarSignIcon className="flex w-8 h-8 text-primary"/></Link>
			  <UserIcon className="flex w-8 h-8 text-primary absolute bottom-1 "/>
            </header>
            </div>
			<div className="ml-14">
           {children}
		   </div>
			</body>
		</html>
	);
}



function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
	  <svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	  >
		<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		<polyline points="9 22 9 12 15 12 15 22" />
	  </svg>
	)
  }
  

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
	  <svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	  >
		<line x1="12" x2="12" y1="2" y2="22" />
		<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
	  </svg>
	)
  }



  function UserIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
	  <svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	  >
		<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
		<circle cx="12" cy="7" r="4" />
	  </svg>
	)
  }
  
  

function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
	  <svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	  >
		<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
		<circle cx="12" cy="12" r="10" />
	  </svg>
	)
  }
  
  


function PenIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
	  <svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	  >
		<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
	  </svg>
	)
  }
  
  
  function XIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
	  <svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	  >
		<path d="M18 6 6 18" />
		<path d="m6 6 12 12" />
	  </svg>
	)
  }