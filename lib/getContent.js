import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const getContent = async (tab) => {
  try {
    const filePath = path.join(process.cwd(), 'app/docs', `${tab.toLowerCase()}.mdx`);
    console.log('Reading file:', filePath);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(fileContents);
    const mdxSource = await serialize(content);
    console.log('Serialized MDX:', mdxSource);
    return mdxSource;
  } catch (error) {
    console.error(`Error reading file for ${tab}:`, error);
    return null;
  }
};
