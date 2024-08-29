// // components/Search.js
// "use client";

// import { InstantSearch, SearchBox, Hits, Configure, connectStateResults } from 'react-instantsearch-dom';
// import { index } from '../lib/algolia';
// import { DocSearch } from '@docsearch/react';
// import '@docsearch/css';

// const Hit = ({ hit }) => (
//   <div className="p-2 border-b">
//     <a href={`/docs/${hit.slug}`} className="text-blue-600 hover:text-blue-800 hover:underline">
//       {hit.title}
//     </a>
//   </div>
// );

// const CustomHits = ({ hits }) => {
//   // Group hits by section
//   const groupedHits = hits.reduce((acc, hit) => {
//     const section = hit.section || 'Uncategorized';
//     if (!acc[section]) {
//       acc[section] = [];
//     }
//     acc[section].push(hit);
//     return acc;
//   }, {});

//   // Get the section names and ensure "Getting Started" is first if it exists
//   const sections = Object.keys(groupedHits);
//   const gettingStartedIndex = sections.indexOf('Getting Started');

//   if (gettingStartedIndex !== -1) {
//     sections.splice(gettingStartedIndex, 1);
//     sections.unshift('Getting Started');
//   }

//   return (
//     <div>
//       {sections.map(section => (
//         <div key={section} className="mb-6">
//           <h3 className="text-lg font-semibold">{section}</h3>
//           <ul>
//             {groupedHits[section].map(hit => (
//               <li key={hit.objectID} className="py-2">
//                 <a href={`/docs/${hit.slug}`} className="text-blue-600 hover:bg-blue-800 hover:text-white p-2 rounded-lg" title={hit.description}>
//                   {hit.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// const LoadingIndicator = () => (
//   <div className="w-full h-4 bg-gray-200 relative overflow-hidden">
//     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-loading" />
//   </div>
// );

// const Results = connectStateResults(({ searchState, searchResults, isSearchStalled }) => (
//   <div>
//     {isSearchStalled ? (
//       <LoadingIndicator />
//     ) : searchResults && searchResults.hits && searchResults.hits.length > 0 ? (
//       <CustomHits hits={searchResults.hits} />
//     ) : (
//       <p>No results found.</p>
//     )}
//   </div>
// ));

// const AlgoliaSearch = () => (
//   <InstantSearch searchClient={index.searchClient} indexName={index.indexName}>
//     <div className="relative">
//       <div className='sticky-top'>
//         <SearchBox />
//       </div>
//       <Configure hitsPerPage={100} />
//       <div className='p-4'>
//         <Results />
//       </div>
//     </div>
//   </InstantSearch>
// );

// const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
// const ALGOLIA_ADMIN_KEY = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY;


// const DocSearchComponent = () => (
//   <DocSearch
//     appId={ALGOLIA_APP_ID}
//     apiKey={ALGOLIA_ADMIN_KEY}
//     indexName="docs"
//   />
// );

// const Search2 = () => (
//   <div>
//     {/* <AlgoliaSearch /> */}
//     <DocSearchComponent />
//   </div>
// );

// export default Search2;

// "use client"

// import React from 'react';
// import { DocSearch } from '@docsearch/react';
// import '@docsearch/css';

// const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
// const ALGOLIA_ADMIN_KEY = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY;

// // The DocSearchComponent will integrate the search functionality
// const DocSearchComponent = () => (
//   <DocSearch
//     appId={ALGOLIA_APP_ID}  // Replace with your Algolia App ID
//     apiKey={ALGOLIA_ADMIN_KEY}  // Replace with your Algolia API Key
//     indexName="docs"  // Replace with your Algolia Index Name
//     placeholder="Search docs"  // Placeholder text for the search input
//     transformItems={(items) => {
//       return items.map((item) => ({
//         ...item,
//         lvl1: item.lvl1 || 'No Title',  // Provide fallback for lvl1 if it's undefined
//       }));
//     }}
//     translations={{
//       button: {
//         buttonText: 'Search',
//         buttonAriaLabel: 'Search',
//       },
//       modal: {
//         searchBox: {
//           resetButtonTitle: 'Clear the query',
//           resetButtonAriaLabel: 'Clear the query',
//           cancelButtonText: 'Cancel',
//           cancelButtonAriaLabel: 'Cancel',
//         },
//         startScreen: {
//           recentSearchesTitle: 'Recent searches',
//           noRecentSearchesText: 'No recent searches',
//           saveRecentSearchButtonTitle: 'Save this search',
//           removeRecentSearchButtonTitle: 'Remove this search',
//           favoriteSearchesTitle: 'Favorites',
//           removeFavoriteSearchButtonTitle: 'Remove from favorites',
//         },
//         errorScreen: {
//           titleText: 'Unable to fetch results',
//           helpText: 'Check your internet connection.',
//         },
//         footer: {
//           selectText: 'to select',
//           selectKeyAriaLabel: 'Enter key',
//           navigateText: 'to navigate',
//           navigateUpKeyAriaLabel: 'Arrow up',
//           navigateDownKeyAriaLabel: 'Arrow down',
//           closeText: 'to close',
//           closeKeyAriaLabel: 'Escape key',
//           searchByText: 'Search by Algolialol',
//         },
//         noResultsScreen: {
//           noResultsText: 'No results for',
//           reportMissingResultsText: 'Think this query should return results?',
//           reportMissingResultsLinkText: 'Let us know.',
//         },
//       }
//     }}
//   />
// );

// export default DocSearchComponent;



// components/Search.js

// "use client";

// import React from 'react';
// import { DocSearch } from '@docsearch/react';
// import '@docsearch/css';

// const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
// const ALGOLIA_ADMIN_KEY = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY;
// const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

// const DocSearchComponent = () => (
//   <DocSearch
//     appId={ALGOLIA_APP_ID}
//     apiKey={ALGOLIA_ADMIN_KEY}
//     indexName={ALGOLIA_INDEX_NAME}
//     placeholder="Search docs"
//     transformItems={(items) => {
//       return items.map((item) => ({
//         ...item,
//         lvl1: item.title || 'No Title',
//       }));
//     }}
//     translations={{
//       button: {
//         buttonText: 'Search',
//         buttonAriaLabel: 'Search',
//       },
//       modal: {
//         searchBox: {
//           resetButtonTitle: 'Clear the query',
//           resetButtonAriaLabel: 'Clear the query',
//           cancelButtonText: 'Cancel',
//           cancelButtonAriaLabel: 'Cancel',
//         },
//         startScreen: {
//           recentSearchesTitle: 'Recent searches',
//           noRecentSearchesText: 'No recent searches',
//           saveRecentSearchButtonTitle: 'Save this search',
//           removeRecentSearchButtonTitle: 'Remove this search',
//           favoriteSearchesTitle: 'Favorites',
//           removeFavoriteSearchButtonTitle: 'Remove from favorites',
//         },
//         errorScreen: {
//           titleText: 'Unable to fetch results',
//           helpText: 'Check your internet connection.',
//         },
//         footer: {
//           selectText: 'to select',
//           selectKeyAriaLabel: 'Enter key',
//           navigateText: 'to navigate',
//           navigateUpKeyAriaLabel: 'Arrow up',
//           navigateDownKeyAriaLabel: 'Arrow down',
//           closeText: 'to close',
//           closeKeyAriaLabel: 'Escape key',
//           searchByText: 'Search by Algolia',
//         },
//         noResultsScreen: {
//           noResultsText: 'No results for',
//           reportMissingResultsText: 'Think this query should return results?',
//           reportMissingResultsLinkText: 'Let us know.',
//         },
//       }
//     }}
//   />
// );

// export default DocSearchComponent;



// components/DocSearchComponent.js

// 'use client'; // Ensure this is at the top for Next.js 13 or above using the app directory

// import React from 'react';
// import { DocSearch } from '@docsearch/react';
// import '@docsearch/css';

// const DocSearchComponent = () => (
//   <DocSearch
//     appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}
//     apiKey={process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY}
//     indexName="docs"
//     // placeholder="Search docs"
//     // transformItems={(items) => {
//     //   return items.map((item) => ({
//     //     ...item,
//     //     lvl1: item.lvl1 || 'No Title',
//     //   }));
//     // }}
//     // translations={{
//     //   button: {
//     //     buttonText: 'Search',
//     //     buttonAriaLabel: 'Search',
//     //   },
//     //   modal: {
//     //     searchBox: {
//     //       resetButtonTitle: 'Clear the query',
//     //       resetButtonAriaLabel: 'Clear the query',
//     //       cancelButtonText: 'Cancel',
//     //       cancelButtonAriaLabel: 'Cancel',
//     //     },
//     //     startScreen: {
//     //       recentSearchesTitle: 'Recent searches',
//     //       noRecentSearchesText: 'No recent searches',
//     //       saveRecentSearchButtonTitle: 'Save this search',
//     //       removeRecentSearchButtonTitle: 'Remove this search',
//     //       favoriteSearchesTitle: 'Favorites',
//     //       removeFavoriteSearchButtonTitle: 'Remove from favorites',
//     //     },
//     //     errorScreen: {
//     //       titleText: 'Unable to fetch results',
//     //       helpText: 'Check your internet connection.',
//     //     },
//     //     footer: {
//     //       selectText: 'to select',
//     //       selectKeyAriaLabel: 'Enter key',
//     //       navigateText: 'to navigate',
//     //       navigateUpKeyAriaLabel: 'Arrow up',
//     //       navigateDownKeyAriaLabel: 'Arrow down',
//     //       closeText: 'to close',
//     //       closeKeyAriaLabel: 'Escape key',
//     //       searchByText: 'Search by Algolia',
//     //     },
//     //     noResultsScreen: {
//     //       noResultsText: 'No results for',
//     //       reportMissingResultsText: 'Think this query should return results?',
//     //       reportMissingResultsLinkText: 'Let us know.',
//     //     },
//     //   },
//     // }}
//   />
// );

// export default DocSearchComponent;
















































// 'use client';

// import React from 'react';
// import { DocSearch } from '@docsearch/react';
// import '@docsearch/css';

// const DocSearchComponent = () => {
//   const transformItems = (items) => {
//     console.log("ITEMS ARE: ", items);
//     return items.map((item) => {
//       console.log('Transforming item:', item);
//       return {
//         ...item,
//         title: item._highlightResult?.title?.value || 'No Title',
//         slug: item._highlightResult?.slug?.value || '',
//         description: item._highlightResult?.description?.value || 'No Description',
//       };
//     });
//   };

//   return (
//     <DocSearch
//       appId={"7RYV7H373X"}
//       apiKey={"2ca7ca9722dfaa5b71d08e37147ef1d2"}
//       indexName="docs"
//       transformItems={transformItems}
//       translations={{
//         noResultsScreen: {
//           noResultsText: 'No results foruu',
//           reportMissingResultsText: 'Think this query should return results?',
//           reportMissingResultsLinkText: 'Let us know.',
//         },
//       }}
//     />
//   );
// };

// export default DocSearchComponent;



// 'use client'; // Ensure this is at the top for Next.js 13 or above using the app directory

// import React from 'react';
// import { DocSearch } from '@docsearch/react';
// import '@docsearch/css';

// const DocSearchComponent = () => {
//   const transformItems = (items) => {
//     return items.map((item) => {
//       // Log the item to see its structure
//       console.log('Transforming item:', item);

//       // Ensure the structure includes the required hierarchy levels and other fields
//       return {
//         title: item._highlightResult?.title?.value || item.title || 'No Title',
//         slug: item._highlightResult?.slug || item.slug || '',
//         description: item._highlightResult?.description || item._highlightResult?.description?.value || item.description || '',
//         content: item._highlightResult?.content || item._snippetResult?.content?.value || item.content || '',
//         type: item._highlightResult?.type || item.type || 'docs',
//         url: item._highlightResult?.url || item.url || '#',
//         hierarchy: {
//           lvl0: item.hierarchy?.lvl0 || item._highlightResult?.hierarchy?.lvl0?.value || '',
//           lvl1: item.hierarchy?.lvl1 || item._highlightResult?.hierarchy?.lvl1?.value || item._highlightResult?.title?.value || 'No Title',
//           lvl2: item.hierarchy?.lvl2 || item._highlightResult?.hierarchy?.lvl2?.value || '',
//           lvl3: item.hierarchy?.lvl3 || item._highlightResult?.hierarchy?.lvl3?.value || '',
//           lvl4: item.hierarchy?.lvl4 || item._highlightResult?.hierarchy?.lvl4?.value || '',
//           lvl5: item.hierarchy?.lvl5 || item._highlightResult?.hierarchy?.lvl5?.value || '',
//           lvl6: item.hierarchy?.lvl6 || item._highlightResult?.hierarchy?.lvl6?.value || '',
//         },
//       };
//     });
//   };

//   return (
//     <DocSearch
//       appId={"7RYV7H373X"}
//       apiKey={"2ca7ca9722dfaa5b71d08e37147ef1d2"}
//       indexName="docs"
//       transformItems={transformItems}
//       translations={{
//         noResultsScreen: {
//           noResultsText: 'No results for',
//           reportMissingResultsText: 'Think this query should return results?',
//           reportMissingResultsLinkText: 'Let us know.',
//         },
//       }}
//     />
//   );
// };

// export default DocSearchComponent;


// 'use client'; // Ensure this is at the top for Next.js 13 or above using the app directory

// import React from 'react';
// import { DocSearch } from '@docsearch/react';
// import '@docsearch/css';

// const DocSearchComponent = () => {
//     const transformItems = (items) => {
//         return items.map((item) => {
//             console.log('Transforming item:', item);
    
//             if (!item.hierarchy) {
//                 console.warn('Item is missing hierarchy:', item);
//             }

//             console.log(item.hierarchy);
    
//             const title = item.type || item._highlightResult?.title?.value || item.hierarchy?.lvl0 || 'No Title';
//             const description = item._highlightResult?.description?.value || item.description || '';
//             const content = item._snippetResult?.content?.value || item.content || '';
//             const url = item.url || '#';
    
//             return {
//                 title,
//                 slug: url,
//                 description,
//                 content,
//                 type: item.type || 'docs',
//                 url,
//                 hierarchy: item.hierarchy
//                 // hierarchy: {
//                     // lvl0: item.type || item.hierarchy?.lvl0 || item._highlightResult?.hierarchy?.lvl0?.value || 'No Title',
//                     // lvl1: item.hierarchy?.lvl1 || item._highlightResult?.hierarchy?.lvl1?.value || 'No Level 1',
//                     // lvl2: item.hierarchy?.lvl2 || item._highlightResult?.hierarchy?.lvl2?.value || 'No Level 2',
//                     // lvl3: item.hierarchy?.lvl3 || item._highlightResult?.hierarchy?.lvl3?.value || 'No Level 3',
//                     // lvl4: item.hierarchy?.lvl4 || item._highlightResult?.hierarchy?.lvl4?.value || 'No Level 4',
//                     // lvl5: item.hierarchy?.lvl5 || item._highlightResult?.hierarchy?.lvl5?.value || 'No Level 5',
//                     // lvl6: item.hierarchy?.lvl6 || item._highlightResult?.hierarchy?.lvl6?.value || 'No Level 6',
//                 // },
//             };
//         });
//     };
    
      

//   return (
//     <DocSearch
//       appId={"7RYV7H373X"}
//       apiKey={"2ca7ca9722dfaa5b71d08e37147ef1d2"}
//       indexName={"docs"}
//       transformItems={transformItems}
      
//     />
//   );
// };

// export default DocSearchComponent;


// 'use client'; // Ensure this is at the top for Next.js 13 or above using the app directory

// import React from 'react';
// import { DocSearch } from '@docsearch/react';
// import '@docsearch/css';

// const CustomHitComponent = ({ hit }) => {
//   return (
//     <div>
//       <h2>{hit.hierarchy.lvl0}</h2>
//       <h3>{hit.title}</h3>
//       <p>{hit.hierarchy.lvl1}</p>
//       <p>{hit.description}</p>
//       <p>{hit.content}</p>
//       <p>{hit.type}</p>
//       <p>{hit.slug}</p>
//     </div>
//   );
// };

// const DocSearchComponent = () => {
//   const transformItems = (items) => {
//     return items.map((item) => {
//       console.log('Transforming item:', item);

//       const title = item._highlightResult?.title?.value || item.hierarchy?.lvl0 || 'No Title';
//       const description = item._highlightResult?.description?.value || item.description || '';
//       const content = item._snippetResult?.content?.value || item.content || '';
//       const url = item.url || '#';

//       return {
//         title,
//         slug: url,
//         description,
//         content,
//         type: item.type || 'docs',
//         url,
//         hierarchy: {
//           lvl0: item.type || item.hierarchy?.lvl0 || item._highlightResult?.hierarchy?.lvl0?.value || 'No Title',
//           lvl1: item.hierarchy?.lvl0 || item.hierarchy?.lvl1 || item._highlightResult?.hierarchy?.lvl1?.value || null,
//           lvl2: item.hierarchy?.lvl2 || item._highlightResult?.hierarchy?.lvl2?.value || null,
//           lvl3: item.hierarchy?.lvl3 || item._highlightResult?.hierarchy?.lvl3?.value || null,
//           lvl4: item.hierarchy?.lvl4 || item._highlightResult?.hierarchy?.lvl4?.value || null,
//           lvl5: item.hierarchy?.lvl5 || item._highlightResult?.hierarchy?.lvl5?.value || null,
//           lvl6: item.hierarchy?.lvl6 || item._highlightResult?.hierarchy?.lvl6?.value || null,
//         },
//       };
//     });
//   };

//   return (
//     <DocSearch
//       appId={"7RYV7H373X"}
//       apiKey={"2ca7ca9722dfaa5b71d08e37147ef1d2"}
//       indexName={"docs"}
//       transformItems={transformItems}
//       hitComponent={CustomHitComponent} // Add this line to use the custom hit component
//     />
//   );
// };

// export default DocSearchComponent;


'use client'; // Ensure this is at the top for Next.js 13 or above using the app directory

import React from 'react';
import '../app/globals.css';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const CustomHitComponent = ({ hit }) => {
  return (
    <a href={hit.url} className="custom-hit-link block">
      <div className="custom-hit-icon">
        <FontAwesomeIcon icon={faFileAlt} />
      </div>
      <div className="custom-hit-content">
        <h3 className="custom-hit-title" dangerouslySetInnerHTML={{ __html: hit.title }}></h3>
        <p className="custom-hit-description" dangerouslySetInnerHTML={{ __html: hit.description }}></p>
        <p className="custom-hit-content-preview" dangerouslySetInnerHTML={{ __html: hit.content }}></p>
        {/* <p className='custom-hit-content-preview'>{hit.content}</p> */}
      </div>
    </a>
  );
};

const DocSearchComponent = () => {
  const transformItems = (items) => {
    return items.map((item) => {
      console.log('Transforming item:', item);

      const title = item._highlightResult?.title?.value || item.hierarchy?.lvl0 || 'No Title';
      const description = item._highlightResult?.description?.value || item.description || '';
      const content = item._snippetResult?.content?.value || item.content || '';
      const url = item.url || '#';

      return {
        title,
        slug: url,
        description,
        content,
        type: item.type || 'docs',
        url,
        hierarchy: {
          lvl0: item.type || item.hierarchy?.lvl0 || item._highlightResult?.hierarchy?.lvl0?.value || 'No Title',
          lvl1: item.hierarchy?.lvl0 || item.hierarchy?.lvl1 || item._highlightResult?.hierarchy?.lvl1?.value || null,
          lvl2: item.hierarchy?.lvl2 || item._highlightResult?.hierarchy?.lvl2?.value || null,
          lvl3: item.hierarchy?.lvl3 || item._highlightResult?.hierarchy?.lvl3?.value || null,
          lvl4: item.hierarchy?.lvl4 || item._highlightResult?.hierarchy?.lvl4?.value || null,
          lvl5: item.hierarchy?.lvl5 || item._highlightResult?.hierarchy?.lvl5?.value || null,
          lvl6: item.hierarchy?.lvl6 || item._highlightResult?.hierarchy?.lvl6?.value || null,
        },
      };
    });
  };

  return (
    <DocSearch
      appId={"7RYV7H373X"}
      apiKey={"2ca7ca9722dfaa5b71d08e37147ef1d2"}
      indexName={"docs"}
      transformItems={transformItems}
      hitComponent={CustomHitComponent}
      
    />
  );
};

export default DocSearchComponent;
