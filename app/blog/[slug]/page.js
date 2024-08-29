import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import SEO2 from '@/components/SEO2';
import { notFound } from 'next/navigation';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShareAlt, FaTag, FaUserCircle, FaCalendarAlt } from 'react-icons/fa';
import ShareModal from '../components/ShareModal';
import MDXContent from '../../../components/MDXContent';
import Breadcrumbs from '@/app/docs/components/Breadcrumbs';


export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app/blog'));
  return files.filter((filename) => filename.endsWith('.mdx')).map((filename) => ({
    slug: filename.replace('.mdx', '')
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app/blog', `${slug}.mdx`);
  const APP_URL = process.env.NEXT_APP_URL;

  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    const title = data.title || 'Documentation';
    const modifiedSlug = slug.toLowerCase();

    return {
      title: `${title} - NFSFU234FormValidation Library`,
      description: data.description || 'Documentation page',
      url: `${APP_URL}/blog/${slug}`,
      image: `${APP_URL}/og-images/${modifiedSlug}.png`,
    };
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {
        title: '404 - Page Not Found',
        description: 'The page you are looking for does not exist.',
        url: `${APP_URL}/blog/${slug}`,
        image: `/images/404.png`,
      };
    }
    throw error;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app/blog', `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContents);
    const mdxSource = await serialize(content);
    const { title, description, relatedLinks } = data;

    const defaultTitle = 'NFSFU234FormValidation Library';
    const fullTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;
    const APP_URL = process.env.NEXT_APP_URL;

    const modifiedSlug = slug.toLowerCase();
    const shareUrl = `${APP_URL}/blog/${slug}`;

    // Get file modification time
    const stats = fs.statSync(filePath);
    const lastModified = stats.mtime;

    return (
      <div className="max-w-6xl mx-auto px-4">
        <SEO2
          title={fullTitle}
          description={description}
          url={shareUrl}
          image={`/og-blog-images/${modifiedSlug}.png`}
        />
        <article className="py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs />

          <header className="mb-12 mt-6 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col space-y-4 w-full lg:w-auto">
              <h1 className="text-4xl font-bold break-words overflow-hidden">{title}</h1>
              <div className="text-gray-600 flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-gray-500 flex-shrink-0" />
                  <span className="text-gray-600">Created On:</span>
                  <time dateTime={data.date} className="whitespace-nowrap">
                    {new Date(data.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="mx-2 hidden lg:inline">•</span>
                  <span className="text-gray-600">Last updated:</span>
                  <time dateTime={lastModified} className="text-gray-600 whitespace-nowrap">
                    {new Date(lastModified).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </div>
              {data.author && (
                <div className="flex items-center space-x-2">
                  <FaUserCircle className="text-gray-500 flex-shrink-0" size={20} />
                  <span>{data.author}</span>
                </div>
              )}
              {data.tags && data.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 max-w-full">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      title={tag}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm flex items-center space-x-1 hover:bg-gray-300 transition-colors duration-300 cursor-default"
                    >
                      <FaTag className="text-gray-500 hover:text-primary transition-colors duration-300 flex-shrink-0" />
                      <span className="truncate">{tag}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4 pt-4 lg:pt-0">
              <ShareModal title={fullTitle} description={description} />
            </div>
          </header>

          <div className="prose prose-lg" id='coreBlog'>
            <MDXContent mdxSource={mdxSource} relatedLinks={relatedLinks} />
          </div>
          {relatedLinks && relatedLinks.length > 0 && (
            <aside className="py-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Related Links</h2>
              <ul className="list-disc list-inside">
                {relatedLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-blue-600 hover:underline">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>
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

