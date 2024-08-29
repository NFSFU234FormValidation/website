"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if (pathname) {
      const pathSegments = pathname.split('/').filter(Boolean);

      const breadcrumbPaths = pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        return {
          // Custom function for capitalization
          name: customCapitalize(segment.replace(/-/g, ' ')),
          href,
        };
      });

      setBreadcrumbs([{ name: 'Home', href: '/' }, ...breadcrumbPaths]);
    }
  }, [pathname]);

  // Custom capitalization function
  const customCapitalize = (str) => {
    return str
      .split(' ')
      .map(word => {
        // Keep words with numbers and special casing intact
        if (/\d/.test(word)) {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  };

  return (
    <nav className="text-sm breadcrumbs">
      <ul className="flex flex-wrap lg:space-x-2 text-gray-500">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            <Link href={breadcrumb.href} className="hover:text-primary">
              {breadcrumb.name}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2">{'>'}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
