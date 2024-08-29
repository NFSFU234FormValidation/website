import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const { serialize } = await import('next-mdx-remote/serialize');

import MDXContent from "@/components/MDXContent";
import SEO from "@/components/SEO";
import SEO2 from '@/components/SEO2';
import RedirectNotice from '@/components/pages/RedirectNotice';

export default async function Page({ params }) {
    
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'app/getting-started', `getting-started.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContents);
  
    // Extract front matter data
    const { title, description } = data;

    let finshedTitle = title || "Getting Started";
    finshedTitle += ' - NFSFU234FormValidation Library';
    const APP_URL = process.env.NEXT_APP_URL ?? 'http://localhost:3000/';
  
    return (
      <div>
        <SEO2
          title={finshedTitle}
          description={description || "Get Started with using the NFSFU234FormValidation Library"}
          url={`/getting-started`}
          image={`/og-images/getting_started.png`}
        />
        <RedirectNotice url={'/docs/getting-started'} />

      </div>
    );
  }