"use client"; // Add this line

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: 360, duration: 2 });
  }, []);

  return <div ref={boxRef} className="w-32 h-32 bg-blue-500"></div>;
};

export default AnimatedComponent;
