'use client'
import React, { useState } from 'react';
import Writer from './editor';


export  function Write() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };


  const toggleVisibility = () => setIsVisible(!isVisible);

  const variants: Array<"bordered"> = ["bordered"];
  function closeModal() {
    setModalOpen(false);
  }

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target instanceof HTMLElement && event.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  }


  

  return (
    <div className="text-center">
    <span className="flex-grow text-xl text-black">Write with AI</span>
    <button onClick={() => setModalOpen(true)} className="ml-4 bg-black text-white p-2">
        Go With AI
    </button>

    {isModalOpen && (
        <div className="modal-backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50" onClick={handleBackdropClick}>
            <div className="modal-content relative p-8 bg-white bg-opacity-60 w-full max-w-4xl mx-auto shadow-xl">
                <div className="flex flex-wrap gap-4">
                    <div className="w-full text-2xl text-black p-4">
                        <h1>write with AI</h1>
                        <Writer value={editorContent} onChange={handleEditorChange} />
                    </div>
                </div>
                <button onClick={() => setModalOpen(false)} className="absolute top-3 right-3 text-xl font-bold text-black">&times;</button>
            </div>
        </div>
    )}
</div>

  );
}

export default Write;
