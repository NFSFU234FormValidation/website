import React from 'react'
import BlogListing from './components/BlogListing';
import { getAllPosts } from './lib/getAllPosts';
import SEO2 from '@/components/SEO2';


const BlogIndexPage = () => {


    const posts = getAllPosts();

  return (
    <>
      <SEO2 
        title='Blog - NFSFU234FormValidationLibrary'
        description=''
        image='/og-blog-images/blog.png'
        url='/blog'

      />
      <BlogListing posts={posts} postsPerPage={5} />
    </>
  )
}

export default BlogIndexPage