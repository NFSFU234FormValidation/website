import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MDXContent from "@/components/MDXContent";
import SEO from "@/components/SEO";
import SEO2 from '@/components/SEO2';
import RedirectNotice from '@/components/pages/RedirectNotice';

export default async function Page({ params }) {
    
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'app/usage', `usage.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContents);
  
    // Extract front matter data
    const { title, description } = data;
  
    let finshedTitle = title || "Usage";
    finshedTitle += ' - NFSFU234FormValidation Library';
    const APP_URL = process.env.NEXT_APP_URL ?? 'http://localhost:3000/';

    return (
      <div>
        <SEO2
          title={finshedTitle}
          description={description || "How to use the NFSFU234FormValidation library"}
          url={`/usage`}
          image={`/og-images/usage.png`}
        />
        
        <RedirectNotice url={'/docs/usage'} />

      </div>
    );
  }