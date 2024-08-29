// app/docs/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import MDXContent from '../../../components/MDXContent';
import SEO2 from '@/components/SEO2';
import { notFound } from 'next/navigation';
import ShareModal from '@/app/blog/components/ShareModal';
import Breadcrumbs from '../components/Breadcrumbs';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app/docs'));
  return files.filter((filename) => filename.endsWith('.mdx')).map((filename) => ({
    slug: filename.replace('.mdx', '')
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app/docs', `${slug}.mdx`);
  const APP_URL = process.env.NEXT_APP_URL;
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    const title = data.title || 'Documentation';
    const modifiedSlug = slug.toLowerCase();


    return {
      title: title + ' - NFSFU234FormValidation Library',
      description: data.description || 'Documentation page',
      url: `${APP_URL}/docs/${slug}`,
      image: `${APP_URL}og-images/${modifiedSlug}.png`
    };
  } catch (error) {
    if (error.code === 'ENOENT') {

      return {
        title: '404 - Page Not Found',
        description: 'The page you are looking for does not exist.',
        url: `${APP_URL}/docs/${slug}`,
        image: `/images/404.png`
      };
    }
    throw error;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app/docs', `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContents);
    const mdxSource = await serialize(content);
    const { title, description, relatedLinks } = data;

    const defaultTitle = 'NFSFU234FormValidation Library';
    const fullTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;
    const APP_URL = process.env.NEXT_APP_URL;

    const modifiedSlug = slug.toLowerCase();



    return (
      <div>
        <SEO2
          title={fullTitle}
          description={description}
          url={`${APP_URL}/docs/${slug}`}
          image={`${APP_URL}og-images/${modifiedSlug}.png`}
        />

        <div className='flex justify-between py-4 px-2 relative'>

          {/* Breadcrumbs */}
          <Breadcrumbs />

          <div className="flex items-center space-x-4 pt-12 lg:pt-0">
            <ShareModal title={fullTitle} description={description} />
          </div>

        </div>

        {/* <MDXContent mdxSource={mdxSource} relatedLinks={relatedLinks} /> */}
        <div className="prose prose-lg" id='coreBlog'>
          <MDXContent mdxSource={mdxSource} relatedLinks={relatedLinks} />
        </div>

      </div>
    );
  } catch (error) {
    if (error.code === 'ENOENT') {
      notFound();
    } else {
      throw error;
    }
  }
}


