import { Search } from "./search"

import Link from "next/link"


export default function Homehero() {
    return (
        <div>
      <div className="flex ml-4 p-4 h-full w-full">
        <div className="bg-white bg-opacity-80 p-4 overflow-hidden">
             <Search />        
        </div>
       </div>

     </div>
    )
}