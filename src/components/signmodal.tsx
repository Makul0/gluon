'use client'
import React, { useState } from 'react';
import TabForm from './tabform'; 


function Modal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

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
      <span onClick={() => setModalOpen(true)} className="flex-grow text-3xl text-black bg-white p-2">Sign In!</span>

      {isModalOpen && (
        <div className="modal-backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="modal-content relative p-8 bg-white bg-opacity-60 max-w-sm w-full shadow-xl">
          <div className="flex flex-wrap gap-4">
          {variants.map((variant, index) => (
  <TabForm key={index} />
))}

    </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
