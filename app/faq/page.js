
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// // import { serialize } from 'next-mdx-remote/serialize';
// const { serialize } = await import('next-mdx-remote/serialize');

// import MDXContent from "@/components/MDXContent";
// import SEO from "@/components/SEO";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import Footer from '../footer';
// import SEO2 from '@/components/SEO2';

// export default async function Page({ params }) {
    
//     const { slug } = params;
//     const filePath = path.join(process.cwd(), 'app/faq', `index.mdx`);
//     const fileContents = fs.readFileSync(filePath, 'utf-8');
//     const { content, data } = matter(fileContents);
//     const mdxSource = await serialize(content);


  
//     // Extract front matter data
//     const { title, description } = data;

//     let finshedTitle = title || "FAQ";
//     finshedTitle += ' - NFSFU234FormValidation Library';
//     const APP_URL = process.env.NEXT_APP_URL ?? 'http://localhost:3000/';
  
//     return (
//       <div>
//         <SEO2
//           title={finshedTitle}
//           description={description || "Frequently Asked Questions about the NFSFU234FormValidation Library"}
//           url={`${APP_URL}/faq`}
//           image={`${APP_URL}/og-images/faq.png`}
//         />
        
        
//         <div className="heroImage hidde rounded-md flex flex-col justify-end p-4 bg-white bg-[url('/images/9650829_7879.png')] h-[500px] bg-contain bg-center bg-no-repeat relative ">

//           <div className="text-black text-center pt-4">

//               <div className="title font-bold text-5xl">Frequently Asked Questions</div>

//               <div className="description mt-2">
//                   Find answers to common questions about NFSFU234FormValidation Library
//               </div>

//           </div>

//         </div>

//         <div className="faq-section my-10">

//           <div className="title mb-4 text-lg font-semibold">Getting Started</div>

//           <div className="faq mb-4 border rounded-md px-3 pt-3 py-2 border-gray-400">

//             <div className="header flex justify-between items-center ">

//                 <div className="question font-semibold text-md mb-2">What is NFSFU234FormValidation Library?</div>

//                 <div className="icon cursor-pointer ">
//                     <FontAwesomeIcon icon={faChevronUp} className='w-5 h-5' />
//                 </div>

//             </div>

//             <div className="answer leading-7 text-[13px] mt-4 pb-2">
//                 NFSFU234FormValidation is a lightweight and user-friendly JavaScript library designed for validating HTML form elements, with a special emphasis on textarea fields. It offers customizable validation messages, comprehensive support for required field checks, seamless inline error displays, and convenient modal error notifications.
//             </div>

//           </div>

//         </div>

//         <div className="faq-section my-10">

//           <div className="title mb-4 text-lg font-semibold">Common Issues</div>

//           <div className="faq mb-4 border rounded-md px-3 pt-3 py-2 border-gray-400">

//             <div className="header flex justify-between items-center ">

//                 <div className="question font-semibold text-md mb-2">How can I handle form validation errors?</div>

//                 <div className="icon cursor-pointer">
//                     <FontAwesomeIcon icon={faChevronUp} className='w-5 h-5' />

//                 </div>

//             </div>

//             <div className="answer leading-7 text-[13px] mt-4 pb-2">
//                 To handle form validation errors, you can use the NFSFU234FormValidation&apos;s built-in error message system. When a form submission fails,
//                 you can display error messages next to the ipnut feilds that caused the issue. This helps users understand 
//                 what went wrong and how to fix it. Additionally, you can customize the error messages to provide more context or guidance if needed.
//             </div>

//           </div>

//         </div>


//         <MDXContent mdxSource={mdxSource} />
//       </div>
//     );
//   }

import ServerFaqPage from './ServerFaqPage';

export default function Page(props) {
  return <ServerFaqPage {...props} />;
}
