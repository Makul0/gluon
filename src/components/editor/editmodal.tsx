'use client'
import React, { useState } from 'react';
import Editor from './editor';
; 


function EditModal() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const variants: Array<"bordered"> = ["bordered"];
  function closeEditModal() {
    setEditModalOpen(false);
  }

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target instanceof HTMLElement && event.target.classList.contains('EditModal-backdrop')) {
      closeEditModal();
    }
  }


  

  return (
    <div className="text-center">
      <span className="flex-grow text-xl text-black">Publish with Editor</span>
     <button onClick={() => setEditModalOpen(true)} className="ml-4 bg-black text-white p-2">
        ➔
      </button>

      {isEditModalOpen && (
        <div className="EditModal-backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="EditModal-content relative bg-white bg-opacity-60 shadow-xl">
          <div className="flex flex-wrap gap-4">
          {variants.map((variant, index) => (
  < Editor/>
))}

    </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditModal;
