import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const { serialize } = await import('next-mdx-remote/serialize');

import SEO2 from '@/components/SEO2';
import RedirectNotice from '@/components/pages/RedirectNotice';

export default async function Page({ params }) {
    
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'app/initialization', `initialization.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContents);
  
    // Extract front matter data
    const { title, description } = data;

    let finshedTitle = title || "Initialization";
    finshedTitle += ' - NFSFU234FormValidation Library';
    const APP_URL = process.env.NEXT_APP_URL ?? 'http://localhost:3000/';
  
    return (
      <div>
        <SEO2
          title={finshedTitle}
          description={description || "How to install the NFSFU234FormValidation library"}
          url={`/initialization`}
          image={`/og-images/initialization.png`}
        />
        
        <RedirectNotice url={'/docs/initialization'} />

      </div>
    );
  }