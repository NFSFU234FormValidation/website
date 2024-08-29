// import algoliasearch from 'algoliasearch';

// const searchClient = algoliasearch('7RYV7H373X', '2ca7ca9722dfaa5b71d08e37147ef1d2');
// const index = searchClient.initIndex('docs');

// export { searchClient, index };


// // lib/algolia.js
// import algoliasearch from 'algoliasearch';

// const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
// const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
// const ALGOLIA_SEARCH_KEY = process.env.ALGOLIA_SEARCH_KEY;

// console.log(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY, ALGOLIA_SEARCH_KEY);

// // Replace with your own Algolia credentials
// // const searchClient = algoliasearch('7RYV7H373X', '2ca7ca9722dfaa5b71d08e37147ef1d2');
// const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
// const indexName = 'docs'; // Use the name of your index

// export const index = {
//   searchClient,
//   indexName,
// };


// lib/algolia.js
import algoliasearch from 'algoliasearch';

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const ALGOLIA_ADMIN_KEY = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY;
const ALGOLIA_SEARCH_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY;

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
const indexName = 'docs'; // Use the name of your index

export const index = {
  searchClient,
  indexName,
};
