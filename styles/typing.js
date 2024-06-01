'use client'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typing = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [ 'new era of scientific research and publishing','accelerating the pace of discovery and innovation'],
      typeSpeed: 60,
      backSpeed: 50, 
      loop: true, 
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span className='disc' ref={typedRef}></span>;
};

export default Typing;