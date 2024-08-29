// import React, { useEffect, useState } from 'react';

// const FunctionList = () => {
//   const [functions, setFunctions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch('/api/available-functions')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setFunctions(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//         setError(true);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     // Loading state with gray rows
//     return (
//       <table className="min-w-full border border-gray-600">
//         <thead>
//           <tr>
//             <th className="border px-4 py-4">S/N</th>
//             <th className="border px-4 py-4">Function Name</th>
//             <th className="border px-4 py-4">How to Call</th>
//             <th className="border px-4 py-4">Description</th>
//             <th className="border px-4 py-4">Browser Supported</th>
//             <th className="border px-4 py-4">Console Supported (Node.js)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {[...Array(6)].map((_, index) => (
//             <tr key={index}>
//               <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
//               <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
//               <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
//               <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
//               <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
//               <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }

//   if (error) {
//     // Error state
//     return <div className="text-red-500 font-bold text-center mt-4">An Error Occurred</div>;
//   }

//   // Normal state (loaded data)
//   return (
//     <table className="min-w-full border border-gray-300">
//       <thead>
//         <tr>
//           <th className="border px-4 py-4">S/N</th>
//           <th className="border px-4 py-4">Function Name</th>
//           <th className="border px-4 py-4">How to Call</th>
//           <th className="border px-4 py-4">Description</th>
//           <th className="border px-4 py-4">Browser Supported</th>
//           <th className="border px-4 py-4">Console Supported (Node.js)</th>
//         </tr>
//       </thead>
//       <tbody>
//         {functions.map((func, index) => (
//           <tr key={index}>
//             <td className="border px-4 py-4">{index + 1}</td>
//             <td className="border px-4 py-4">
//               <a href={`/docs/${func.name.replace(/[()]/g, '').toLowerCase()}`}>{func.name}</a>
//             </td>
//             <td className="border px-4 py-4">{func.call}</td>
//             <td className="border px-4 py-4">{func.description}</td>
//             <td className="border px-4 py-4 text-center">{func.browserSupported ? '✅' : '❌'}</td>
//             <td className="border px-4 py-4 text-center">{func.consoleSupported ? '✅' : '❌'}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default FunctionList;



import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const FunctionList = () => {
  const [functions, setFunctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/available-functions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFunctions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <table className="min-w-full border border-gray-600">
        <thead>
          <tr>
            <th className="border px-4 py-4">S/N</th>
            <th className="border px-4 py-4">Function Name</th>
            <th className="border px-4 py-4">How to Call</th>
            <th className="border px-4 py-4">Description</th>
            <th className="border px-4 py-4">Browser Supported</th>
            <th className="border px-4 py-4">Console Supported (Node.js)</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
              <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
              <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
              <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
              <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
              <td className="border px-4 py-2 my-2 bg-gray-300 animate-pulse">&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (error) {
    return <div className="text-red-500 font-bold text-center mt-4">An Error Occurred</div>;
  }

  return (
    <div className="overflow-x-auto relative">
      <table className="min-w-full border border-gray-300">
        <thead >
          <tr>
            <th className="border px-4 py-4">S/N</th>
            <th className="border px-4 py-4">Function Name</th>
            <th className="border px-4 py-4">How to Call</th>
            <th className="border px-4 py-4">Description</th>
            <th className="border px-4 py-4">Browser Supported</th>
            <th className="border px-4 py-4">Console Supported (Node.js)</th>
            <th className="border px-4 py-4">Return Type</th> {/* Added Return Type column */}
          </tr>
        </thead>
        <tbody>
          {functions.map((func, index) => (
            <tr key={index}>
              <td className="border px-4 py-4">{index + 1}</td>
              <td className="border px-4 py-4">
                <Link href={`/docs/${func.name.replace(/[()]/g, '').toLowerCase()}`} className='text-blue-500 font-semibold'>{func.name}</Link>
              </td>
              <td className="border px-4 py-4">{func.call}</td>
              <td className="border px-4 py-4">{func.description}</td>
              <td className="border px-4 py-4 text-center">{func.browserSupported ? '✅' : '❌'}</td>
              <td className="border px-4 py-4 text-center">{func.consoleSupported ? '✅' : '❌'}</td>
              <td className="border px-4 py-4 text-center">{func.returnType}</td> {/* Added Return Type cell */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FunctionList;
