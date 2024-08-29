import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tab = searchParams.get('tab');

  try {
    const filePath = path.join(process.cwd(), 'app/docs', `${tab.toLowerCase()}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(fileContents);
    const mdxSource = await serialize(content);

    return new Response(JSON.stringify({ mdxSource }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Content not found' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
