
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SEO2 from '@/components/SEO2';
import RedirectNotice from '@/components/pages/RedirectNotice';

const { serialize } = await import('next-mdx-remote/serialize');

export default async function Page({ params }) {
  const filePath = path.join(process.cwd(), 'app/installation', `installation.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContents);

  const { title, description } = data;
  let finshedTitle = title || "Installation";
  finshedTitle += ' - NFSFU234FormValidation Library';
  const APP_URL = process.env.NEXT_APP_URL ?? 'http://localhost:3000/';

  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <SEO2
        title={finshedTitle}
        description={description || "How to install the NFSFU234FormValidation library"}
        url={`${APP_URL}/installation`}
        image={`${APP_URL}/og-images/installation.png`}
      />

      <RedirectNotice url={'/docs/installation'} />

    </div>
  );
}
