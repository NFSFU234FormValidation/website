const fs = require('fs');
const path = require('path');
const algoliasearch = require('algoliasearch');
const matter = require('gray-matter');
require('dotenv').config(); // Add this line to load environment variables

// Initialize Algolia client
// const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);
const client = algoliasearch('7RYV7H373X', '2ca7ca9722dfaa5b71d08e37147ef1d2');

const index = client.initIndex('docs');

// Function to read all .mdx files recursively from a given folder
const readFilesRecursively = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(readFilesRecursively(filePath));
    } else if (filePath.endsWith('.mdx')) {
      results.push(filePath);
    }
  });
  return results;
};

// Read all .mdx files from the docs folder recursively
const docsFolder = path.join(__dirname, '../app/docs');
const files = readFilesRecursively(docsFolder);

// Function to index documents
const indexDocuments = async () => {
  try {
    const objects = files.map((filePath) => {
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContents);
      const slug = path.basename(filePath, '.mdx');
      const relativePath = path.relative(docsFolder, filePath);
      const url = `/docs/${slug}`;

      // Ensure all hierarchy levels are strings
      const hierarchy = {
        lvl0: data.title || '',
        lvl1: data.section || '',
        lvl2: data.lvl2 || '',
        lvl3: data.lvl3 || '',
        lvl4: data.lvl4 || '',
        lvl5: data.lvl5 || '',
        lvl6: data.lvl6 || '',
      };

      // Log to debug missing levels
      console.log(`Indexing document: ${slug}`);
      console.log(`Hierarchy: ${JSON.stringify(hierarchy)}`);

      return {
        objectID: slug,
        title: data.title || slug,
        slug,
        description: data.description || '',
        section: data.section || 'Uncategorized',
        content: content.substring(0, 5000), // Trim content to first 5000 characters
        type: data.section || 'docs',
        url,
        hierarchy,
        lvl0: hierarchy.lvl0,
        lvl1: hierarchy.lvl1,
        lvl2: hierarchy.lvl2,
        lvl3: hierarchy.lvl3,
        lvl4: hierarchy.lvl4,
        lvl5: hierarchy.lvl5,
        lvl6: hierarchy.lvl6,
      };
    });

    // Save objects to Algolia index
    const { objectIDs } = await index.saveObjects(objects);
    console.log('Indexed objects:', objectIDs);
  } catch (error) {
    console.error('Error indexing documents:', error);
  }
};

indexDocuments();

