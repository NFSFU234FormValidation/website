// "use client";

// import React, { useState } from 'react';
// import MDXContent from '@/components/MDXContent';

// const tabs = ['Installation', 'Initialization', 'Usage'];

// const ClientSideTabs = ({ contents = {} }) => { // Provide a default value for contents
//   const [activeTab, setActiveTab] = useState('Installation');

//   // Check if contents and activeTab content exist
//   const activeContent = contents[activeTab] || null; // Fallback to null if undefined

//   console.log(activeTab);
//   console.log(activeContent);

//   return (
//     <section>
//       <div className="heading">getting started</div>

//       <div className="contents">
//         <div className="tab mt-4 flex border-b border-gray-400">
//           {tabs.map((tab) => (
//             <div
//               key={tab}
//               className={`tab-item ${activeTab === tab ? 'active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//               style={{ cursor: 'pointer' }}
//             >
//               {tab}
//             </div>
//           ))}
//         </div>

//         <div className="example-section px-3 py-6 border border-gray-400 border-md rounded-md mt-4">
//           {activeContent ? (
//             <MDXContent mdxSource={activeContent} />
//           ) : (
//             <div>Loading content for {activeTab}...</div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientSideTabs;

// "use client";

// import React, { useState, useEffect } from 'react';
// import MDXContent from '@/components/MDXContent';
// import { getContent } from '@/lib/getContent';

// const tabs = ['Installation', 'Initialization', 'Usage'];

// const ClientSideTabs = ({ contents = {} }) => {
//   const [activeTab, setActiveTab] = useState('Installation');
//   const [activeContent, setActiveContent] = useState(null);

//   useEffect(() => {
//     // if (contents[activeTab]) {
//     //   setActiveContent(activeTab);
//     // }
//     const fetchContent = async () => {
//         const content = await getContent(activeTab);
//         setActiveContent(content);
//       };
//       fetchContent();
//   }, [activeTab]);

//   console.log(contents);
//   console.log(contents[activeTab]);
//   console.log('Active Tab:', activeTab);
//   console.log('Active Content:', activeContent);

//   return (
//     <section>
//       <div className="heading">getting started</div>

//       <div className="contents">
//         <div className="tab mt-4 flex border-b border-gray-400">
//           {tabs.map((tab) => (
//             <div
//               key={tab}
//               className={`tab-item ${activeTab === tab ? 'active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//               style={{ cursor: 'pointer' }}
//             >
//               {tab}
//             </div>
//           ))}
//         </div>

//         <div className="example-section px-3 py-6 border border-gray-400 border-md rounded-md mt-4">
//           {activeContent ? (
//             <MDXContent mdxSource={activeContent} />
//           ) : (
//             <div>Loading content for {activeTab}...</div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientSideTabs;



"use client";

import React, { useState, useEffect } from 'react';
import MDXContent from '@/components/MDXContent';

const tabs = ['Installation', 'Initialization', 'Usage'];

const ClientSideTabs = () => {
  const [activeTab, setActiveTab] = useState('Installation');
  const [activeContent, setActiveContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/getContent?tab=${activeTab}`);
        const data = await response.json();
        setActiveContent(data.mdxSource);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [activeTab]);

  return (
    <section>
      <div className="heading">getting started</div>

      <div className="contents">
        <div className="tab mt-4 flex border-b border-gray-400">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              style={{ cursor: 'pointer' }}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="example-section px-3 py-6 border border-gray-400 border-md rounded-md mt-4">
          {activeContent ? (
            <MDXContent mdxSource={activeContent} />
          ) : (
            <div>Loading content for {activeTab}...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientSideTabs;
