
// lib/algolia.js
import algoliasearch from 'algoliasearch';

const ALGOLIA_APP_ID = "7RYV7H373X";
const ALGOLIA_ADMIN_KEY = "2ca7ca9722dfaa5b71d08e37147ef1d2";
const ALGOLIA_SEARCH_KEY = "docs";

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
const indexName = 'docs'; // Use the name of your index

export const index = {
  searchClient,
  indexName,
};
