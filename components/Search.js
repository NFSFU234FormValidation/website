// components\Search.js
"use client";

import { InstantSearch, SearchBox, Hits, Configure, connectStateResults } from 'react-instantsearch-dom';
import { index } from '../lib/algolia';
import DocSearchComponent from './Search2';

const Hit = ({ hit }) => (
  <div className="p-2 border-b">
    <a href={`/docs/${hit.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline">
      {hit.title}
    </a>
  </div>
);

const CustomHits = ({ hits }) => {
  // Group hits by section
  const groupedHits = hits.reduce((acc, hit) => {
    const section = hit.section || 'Uncategorized';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(hit);
    return acc;
  }, {});

  // Get the section names and ensure "Getting Started" is first if it exists
  const sections = Object.keys(groupedHits);
  const gettingStartedIndex = sections.indexOf('Getting Started');

  if (gettingStartedIndex !== -1) {
    sections.splice(gettingStartedIndex, 1);
    sections.unshift('Getting Started');
  }

  return (
    <div>
      {sections.map(section => (
        <div key={section} className="mb-6">
          <h3 className="text-lg font-semibold">{section}</h3>
          <ul>
            {groupedHits[section].map(hit => (
              <li key={hit.objectID} className="py-2">
                <a href={`/docs/${hit.slug}`} className="text-blue-600 hover:bg-blue-800 hover:text-white p-2 rounded-lg" title={hit.description}>
                  {hit.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const LoadingIndicator = () => (
  <div className="w-full h-4 bg-gray-200 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-loading" />
  </div>
);

const Results = connectStateResults(({ searchState, searchResults, isSearchStalled }) => (
  <div>
    {isSearchStalled ? (
      <LoadingIndicator />
    ) : searchResults && searchResults.hits && searchResults.hits.length > 0 ? (
      <CustomHits hits={searchResults.hits} />
    ) : (
      <p>No results found.</p>
    )}
  </div>
));

const AlgoliaSearch = () => (
  <InstantSearch searchClient={index.searchClient} indexName={index.indexName}>
    <div className="relative">
      <div className='sticky-top'>
        <div className="search-form">
            <DocSearchComponent />
        </div>
        {/* <SearchBox /> */}
      </div>
      <Configure hitsPerPage={100} />
      <div className='p-4'>
        <Results />
      </div>
    </div>
  </InstantSearch>
);

export default AlgoliaSearch;
