

// app/docs/layout.js
"use client";

import React, { useState } from 'react';
import AlgoliaSearch from '@/components/Search';
import '../globals.css';
import Navbar from '../navbar';
import Footer from '../footer';
import Footer1 from '../footer1';

export default function DocsLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    // <div>
    <html lang="en">

      <body>

        <Navbar onMenuToggle={handleMenuToggle} />
        <div className={`flex h-[calc(100vh-70px)] overflow-hidden relative ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
          <div className={`left md:w-[330px] bg-gray100 border-r-2 border-grey-300 md:sticky left-0 top-0 mdz-20 overflow-y-auto absolute w-screen bg-white z-50 border-2 h-[calc(100vh-70px)] md:h-full ${isSidebarVisible ? 'block' : 'hidden md:block'}`}>
            <AlgoliaSearch />
          </div>
          <div className="w-full overflow-y-auto pl-2">
            <div className="p-4">{children}</div>
            <Footer1 />
          </div>
        </div>
      </body>
    </html>

  );
}

