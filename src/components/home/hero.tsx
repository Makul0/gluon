import { Search } from "./search"

import Link from "next/link"
import Post from "../ui/card"


export default function Homehero() {
    return (
        <div>
      <div className="flex ml-4 p-4 h-full w-full">
        <div className="realtive h-full w-full bg-white bg-opacity-80 p-8 mr-4 overflow-hidden">
             <Search /> 
             <Post />       
        </div>
       </div>

     </div>
    )
}