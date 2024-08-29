"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaInfoCircle } from 'react-icons/fa';  

const RedirectNotice = ({ url, duration = 5 }) => {
  const [countdown, setCountdown] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          window.location.href = url;
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [url, duration]);

  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <div className='logo absolute top-3 left-5'>
        <Image src={'/NFSFU234FormValidation-logo.png'} alt='Logo' width={80} height={80} />
      </div>

      <FaInfoCircle className='text-primary w-24 h-24 mb-4' />  
      <h1 className='font-bold text-4xl uppercase mb-2'>Page Moved</h1>
      <p>Redirecting to <span className='text-primary font-semibold'>{url}</span> in <span className='text-primary font-bold'>{countdown}</span> second{countdown !== 1 ? 's' : ''}</p>
    </div>
  );
};

export default RedirectNotice;