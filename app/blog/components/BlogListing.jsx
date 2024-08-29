// import React from 'react';
// import Link from 'next/link';
// import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';

// const BlogListing = ({ posts }) => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
//       {/* Navigation */}
//       <nav className="mb-8">
//         <ul className="flex space-x-4">
//           <li><Link href="/blog" className="text-blue-600 hover:underline">All Posts</Link></li>
//           <li><Link href="/blog/category/tutorials" className="text-blue-600 hover:underline">Tutorials</Link></li>
//           <li><Link href="/blog/category/news" className="text-blue-600 hover:underline">News</Link></li>
//           <li><Link href="/blog/category/tips" className="text-blue-600 hover:underline">Tips & Tricks</Link></li>
//         </ul>
//       </nav>

//       {/* Blog posts list */}
//       <div className="space-y-8">
//         {posts.map((post) => (
//           <article key={post.id} className="border-b border-gray-200 pb-8">
//             <Link href={`/blog/${post.slug}`} className="block group">
//               <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
//                 {post.title}
//               </h2>
//             </Link>
//             <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
//               <span className="flex items-center">
//                 <FaCalendarAlt className="mr-2" />
//                 {post.date}
//               </span>
//               <span className="flex items-center">
//                 <FaUser className="mr-2" />
//                 {post.author}
//               </span>
//             </div>
//             <p className="text-gray-600 mb-4">{post.excerpt}</p>
//             <div className="flex items-center">
//               <FaTags className="mr-2 text-gray-400" />
//               {post.tags.map((tag) => (
//                 <span key={tag} className="mr-2 text-sm text-blue-500 hover:underline">
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-12 flex justify-between">
//         <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200">
//           Previous
//         </button>
//         <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogListing;

"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Breadcrumbs from '@/app/docs/components/Breadcrumbs';

const BlogListing = ({ posts, postsPerPage }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPosts, setSelectedPosts] = useState([]);

  const routerPage = router.query?.page || 1;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = parseInt(searchParams.get('page')) || 1;
    
    setCurrentPage(page);

    const startIndex = (page - 1) * postsPerPage;
    const newSelectedPosts = posts.slice(startIndex, startIndex + postsPerPage);
    setSelectedPosts(newSelectedPosts);
  }, [routerPage, posts, postsPerPage]);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePagination = (newPage) => {
    router.push(`/blog?page=${newPage}`);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);
    const startPage = Math.max(1, currentPage - halfPagesToShow);
    const endPage = Math.min(totalPages, currentPage + halfPagesToShow);
  
    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push('...');
      }
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
  
    return (
      <div className="flex items-center justify-center space-x-2">
        {pageNumbers.map((number, index) =>
          typeof number === 'number' ? (
            <button
              key={index}
              onClick={() => handlePagination(number)}
              className={`px-3 py-1 rounded-full transition-colors duration-200 ${
                number === currentPage
                  ? 'bg-primary text-white'
                  : 'border border-gray-300 hover:bg-primary hover:text-white'
              }`}
            >
              {number}
            </button>
          ) : (
            <span key={index} className="px-3 py-1 text-gray-500">
              {number}
            </span>
          )
        )}
      </div>
    );
  };
  

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <Breadcrumbs />

      <h1 className="text-3xl font-bold mb-8 mt-4">Blog Posts</h1>
      
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li><Link href="/blog" className="text-primary hover:underline">All Posts</Link></li>
          <li><Link href="/blog/category/tutorials" className="text-primary hover:underline">Tutorials</Link></li>
          <li><Link href="/blog/category/news" className="text-primary hover:underline">News</Link></li>
          <li><Link href="/blog/category/tips" className="text-primary hover:underline">Tips & Tricks</Link></li>
        </ul>
      </nav>

      <div className="space-y-8">
        {selectedPosts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                {post.title}
              </h2>
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-center text-sm text-gray-500 mb-4 lg:space-x-4 space-y-2 lg:space-y-0">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <FaUser className="mr-2" />
                {post.author}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap items-start">
              <FaTags className="mr-2 text-gray-400" />
              {post.tags.map((tag) => (
                <span key={tag} className="mr-2 text-sm text-primary hover:underline">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-between items-center">
        <button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage <= 1}
          className={`px-4 py-2 border border-gray-300 rounded-md ${
            currentPage > 1 ? 'hover:bg-gray-100' : 'cursor-not-allowed opacity-50'
          } transition-colors duration-200`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-2">
          {renderPageNumbers()}
        </div>

        <button
          onClick={() => handlePagination(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={`px-4 py-2 border border-gray-300 rounded-md ${
            currentPage < totalPages ? 'hover:bg-gray-100' : 'cursor-not-allowed opacity-50'
          } transition-colors duration-200`}
        >
          Next
        </button>
      </div>

      {/* Current Page Indicator */}
      <div className="mt-4 text-center text-gray-600 ">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default BlogListing;






// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';

// const BlogListing = ({ posts }) => {
//   // Sort posts by date in descending order (most recent first)
//   const sortedPosts = [...posts].sort((a, b) => {
//     return new Date(b.date) - new Date(a.date);
//   });

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
//       {/* Navigation */}
//       <nav className="mb-8">
//         <ul className="flex space-x-4">
//           <li><Link href="/blog" className="text-blue-600 hover:underline">All Posts</Link></li>
//           <li><Link href="/blog/category/tutorials" className="text-blue-600 hover:underline">Tutorials</Link></li>
//           <li><Link href="/blog/category/news" className="text-blue-600 hover:underline">News</Link></li>
//           <li><Link href="/blog/category/tips" className="text-blue-600 hover:underline">Tips & Tricks</Link></li>
//         </ul>
//       </nav>

//       {/* Blog posts list */}
//       <div className="space-y-12">
//         {sortedPosts.map((post) => (
//           <article key={post.id} className="flex flex-col md:flex-row border-b border-gray-200 pb-12">
//             <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
//               <Link href={`/blog/${post.slug}`}>
//                 <div className="relative aspect-video overflow-hidden rounded-lg">
//                   <Image 
//                     src={post.imageUrl} 
//                     alt={post.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//               </Link>
//             </div>
//             <div className="md:w-2/3">
//               <Link href={`/blog/${post.slug}`} className="block group">
//                 <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
//                   {post.title}
//                 </h2>
//               </Link>
//               <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
//                 <span className="flex items-center">
//                   <FaCalendarAlt className="mr-2" />
//                   {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
//                 </span>
//                 <span className="flex items-center">
//                   <FaUser className="mr-2" />
//                   {post.author}
//                 </span>
//               </div>
//               <p className="text-gray-600 mb-4">{post.excerpt}</p>
//               <div className="flex items-center">
//                 <FaTags className="mr-2 text-gray-400" />
//                 {post.tags.map((tag) => (
//                   <span key={tag} className="mr-2 text-sm text-blue-500 hover:underline">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-12 flex justify-between">
//         <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200">
//           Previous
//         </button>
//         <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogListing;