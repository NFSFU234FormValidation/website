// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// export function getAllPosts() {
//     const postsDirectory = path.join(process.cwd(), 'app/blog');
//     const filenames = fs.readdirSync(postsDirectory);

//     const posts = filenames
//         .filter((filename) => filename.endsWith('.mdx'))
//         .map((filename) => {
//             const filePath = path.join(postsDirectory, filename);
//             const fileContents = fs.readFileSync(filePath, 'utf-8');
//             const { data } = matter(fileContents);

//             return {
//                 ...data,
//                 slug: filename.replace('.mdx', ''),
//                 date: new Date(data.date).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric',
//                 }), // Format the date here
//             };
//         });

//     return posts;
// }



import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllPosts() {
    const postsDirectory = path.join(process.cwd(), 'app/blog');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
        .filter((filename) => filename.endsWith('.mdx'))
        .map((filename) => {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContents);

            return {
                ...data,
                slug: filename.replace('.mdx', ''),
                date: new Date(data.date), // Keep as Date object for sorting
            };
        });

    // Sort posts by date in descending order (newest first)
    posts.sort((a, b) => b.date - a.date);

    // Format the date after sorting
    posts.forEach(post => {
        post.date = post.date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    });

    return posts;
}
