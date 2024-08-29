// app/initialization/layout.js
"use client";

import React from 'react';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
  
  