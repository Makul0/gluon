import { Search } from "./search"
import Profile from "./profile"
import Link from "next/link"


export default function Homehero() {
    return (
        <div>
     <div className="flex bg-white max-w-22 text-black ml-8 mb-4 justify-between text-2xl fixed bottom-0 left-24">
     <div className="flex flex-grow items-center justify-center p-2">
        Publish your own paper
       </div>
       <Link href="/publish">
       <div className="flex flex-grow items-center justify-center bg-black text-white p-2">
        Go!
       </div></Link>
      </div>
      <div className="flex ml-4 p-4 h-full w-full mt-4">
        <div className="bg-white bg-opacity-10 p-4">
             <Search />       
             
        </div>
       </div>
    <div className="flex bg-white max-w-22 text-black ml-4 mb-4 justify-between text-2xl fixed bottom-0 left-4">
       <div className="flex flex-grow items-center justify-center p-2">
        <Profile />
       </div>
     </div>
     </div>
    )
}