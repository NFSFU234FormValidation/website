// app/faq/ServerFaqPage.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import MDXContent from "@/components/MDXContent";
import SEO2 from "@/components/SEO2";
import FAQClientComponent from './FAQClientComponent';

export default async function ServerFaqPage({ params }) {
  const filePath = path.join(process.cwd(), 'app/faq', 'index.mdx');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);

  const faqsFilePath = path.join(process.cwd(), 'app/faq', 'faqs.json');
  const faqsFileContents = fs.readFileSync(faqsFilePath, 'utf-8');
  const faqs = JSON.parse(faqsFileContents);

  const { title, description } = data;
  const finishedTitle = `${title || 'FAQ'} - NFSFU234FormValidation Library`;
  const APP_URL = process.env.NEXT_APP_URL ?? 'http://localhost:3000/';

  return (
    <div>
      <SEO2
        title={finishedTitle}
        description={description || "Frequently Asked Questions about the NFSFU234FormValidation Library"}
        url={`${APP_URL}/faq`}
        image={`${APP_URL}/og-images/faq.png`}
      />

      <div className="heroImage hidde rounded-md flex flex-col justify-end p-4 bg-white bg-[url('/images/9650829_7879.png')] h-[500px] bg-contain bg-center bg-no-repeat relative ">
        <div className="text-black text-center pt-4">
          <div className="title font-bold text-5xl">Frequently Asked Questions</div>
          <div className="description mt-2">
            Find answers to common questions about NFSFU234FormValidation Library
          </div>
        </div>
      </div>

      <FAQClientComponent faqs={faqs} />

      <MDXContent mdxSource={mdxSource} />
    </div>
  );
}
