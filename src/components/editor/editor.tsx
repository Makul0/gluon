'use client'
import { useState } from "react";
import ReactQuill from "react-quill";
import Script from "next/script";



const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      [{ 'Script': 'sub'}, { 'Script': 'super' }],
      [{ 'align': [] }],
      ['link', 'image', 'video', 'formula'],
      ['clean']
    ]
  };
  
export default function Editor () {
  const [value, setValue] = useState("");
  return (
    <div style={{ fontFamily: "EB Garamond",backgroundImage: 'url("https://image.lexica.art/full_webp/2ca4be81-cd41-40c9-a2ce-b150d90685ff")',
    backgroundSize: "cover",
    backgroundPosition: "center", }} className="realtive h-screen w-sceen p-4 ">
      <div className="h-full w-full items-center justify-center">
        <div className="text-2xl bg-white p-2">
          Start writing your paper ..
        </div>
      <div className="relative h-full w-full ">
      <link href="/styles.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" rel="stylesheet" />
<Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
<Script src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js"></Script>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
/>
<Script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></Script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
        <ReactQuill 
           theme="snow" 
           value={value}
           onChange={setValue} 
           modules={modules}
           className="relative h-full text-black bg-white bg-opacity-90 overflow-hidden"
           />
      </div>
      </div>
    </div>
  );
};


