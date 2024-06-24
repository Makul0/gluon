'use client'
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import 'katex/dist/katex.min.css'; 
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

const Writer = ()=> {
  const [value, setValue] = useState("");
  return (
    <div className="realtive h-80 w-sceen p-4">
      <div className="h-full w-full flex space-x-2 items-center justify-center">
      <div className="relative h-full w-1/2 ">
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
           className="h-full"
           />
      </div>
      <div className="relative h-full w-1/2 border ">
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
      </div>
      </div>
    </div>
  );
};

export default Writer;
