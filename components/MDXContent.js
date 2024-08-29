"use client";

import { MDXProvider } from '@mdx-js/react';
import dynamic from 'next/dynamic';
import CustomComponents from './CustomComponents';
import RelatedLinks from './htmlComponents/RelatedLinks';

// Dynamically import MDXRemote
const MDXRemote = dynamic(() => import('next-mdx-remote').then(mod => mod.MDXRemote), {
  ssr: false, // disable server-side rendering
});

const MDXContent = ({ mdxSource, relatedLinks }) => {

  const components = {
    ...CustomComponents,
    RelatedLinks: (props) => <RelatedLinks items={relatedLinks} {...props} />
  };

  return (
    <MDXProvider components={components}>
      <MDXRemote {...mdxSource} />
    </MDXProvider>
  );
};

export default MDXContent;
