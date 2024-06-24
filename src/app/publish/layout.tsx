import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Publish",
    description: "Publishing page",
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
        {children}
        
      </div>
    </main>
			</body>
		</html>
	);
}