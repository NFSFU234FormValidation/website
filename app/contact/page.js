/* eslint-disable @next/next/no-img-element */
// // pages/contact.js

// import Head from 'next/head'
// import Link from 'next/link'

// export default function Contact() {
//   return (
//     <div className="min-h-scree bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <Head>
//         <title>Contact Us - NFSFU234FormValidation</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="max-w-3xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
        
//         <div className="bg-white shadow overflow-hidden rounded-lg">
//           <div className="px-4 py-5 sm:p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in touch</h2>
//             <p className="text-gray-600 mb-6">
//               We&apos;d love to hear from you! Connect with us on social media or send us an email.
//             </p>
            
//             <ul className="space-y-4">
//               <li className="flex items-center">
//                 <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//                 </svg>
//                 <Link href="https://twitter.com/nf_validator234" className="text-blue-600 hover:underline">@nf_validator234</Link>
//               </li>
//               <li className="flex items-center">
//                 <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
//                 </svg>
//                 <Link href="https://www.instagram.com/nf_validator234" className="text-blue-600 hover:underline">@nf_validator234</Link>
//               </li>
//               <li className="flex items-center">
//                 <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
//                 </svg>
//                 <Link href="https://github.com/NFSFU234FormValidation" className="text-blue-600 hover:underline">NFSFU234FormValidation</Link>
//               </li>
//               <li className="flex items-center">
//                 <svg className="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//                 </svg>
//                 <a href="mailto:nf.validator234@gmail.com" className="text-blue-600 hover:underline">
//                   nf.validator234@gmail.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// import Head from 'next/head';
// import Link from 'next/link';

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <Head>
//         <title>Contact Us - NFSFU234FormValidation</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">
//         <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
        
//         <div className="space-y-6">
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in touch</h2>
//             <p className="text-gray-600">
//               We'd love to hear from you! Connect with us on social media or send us an email.
//             </p>
//           </div>

//           <ul className="space-y-4">
//             <li className="flex items-center">
//               <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//               </svg>
//                 <Link href="https://twitter.com/nf_validator234" className="text-blue-600 hover:underline">@nf_validator234</Link>
//             </li>
//             <li className="flex items-center">
//               <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
//               </svg>
              
//                 <Link href="https://www.instagram.com/nf_validator234" className="text-blue-600 hover:underline">@nf_validator234</Link>
              
//             </li>
//             <li className="flex items-center">
//               <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.997.108-.776.419-1.305.763-1.605-2.665-.305-5.466-1.336-5.466-5.932 0-1.31.469-2.38 1.235-3.22-.123-.305-.535-1.53.117-3.185 0 0 1.008-.322 3.3 1.23.957-.267 1.985-.399 3.005-.403 1.02.004 2.048.136 3.005.403 2.292-1.552 3.297-1.23 3.297-1.23.655 1.655.243 2.88.12 3.185.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.475 5.921.43.37.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.292 0 .323.216.694.824.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12z"/>
//               </svg>
              
//                 <Link href="https://github.com/NFSFU234FormValidation" className="text-blue-600 hover:underline">@NFSFU234FormValidation</Link>
              
//             </li>
//           </ul>
//         </div>
//       </main>
//     </div>
//   );
// }



import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us - NFSFU234FormValidation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            Let&apos;s Get in Touch
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We&rapos;re here to help and answer any question you might have. Connect with us on social media!
          </p>
          
          <div className="mb-12">
            <img 
              src="/images/undraw_contact_us_re_4qqt.svg" 
              alt="Contact Us Illustration"
              className="w-full h-[300px] mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Link href="https://twitter.com/nf_validator234" className='flex'>
                <svg className="w-8 h-8 text-gray-800 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="ml-3 text-xl font-medium text-gray-800 hover:text-blue-500">
                  @nf_validator234
                </span>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href="https://www.instagram.com/nf_validator234" className='flex'>
                <svg className="w-8 h-8 text-gray-800 hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
                <span className="ml-3 text-xl font-medium text-gray-800 hover:text-pink-500">
                  @nf_validator234
                </span>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href="https://github.com/NFSFU234FormValidation" className='flex'>
                <svg className="w-8 h-8 text-gray-800 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.997.108-.776.419-1.305.763-1.605-2.665-.305-5.466-1.336-5.466-5.932 0-1.31.469-2.38 1.235-3.22-.123-.305-.535-1.53.117-3.185 0 0 1.008-.322 3.3 1.23.957-.267 1.985-.399 3.005-.403 1.02.004 2.048.136 3.005.403 2.292-1.552 3.297-1.23 3.297-1.23.655 1.655.243 2.88.12 3.185.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.475 5.921.43.37.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.292 0 .323.216.694.824.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="ml-3 text-xl font-medium text-gray-800 hover:text-gray-900">
                  @NFSFU234FormValidation
                </span>
              </Link>
            </div>
          </div>

            <div className='mt-12'>

                <Link href="https://twitter.com/nf_validator234" className='flex items-center justify-center font-semibold'>
                    <FontAwesomeIcon icon={faQuestionCircle} className='w-8 h-8' />
                    <span className="ml-3 text-lg capitalize font-medium text-gray-800 hover:text-blue-500">
                        visit our FAQ page
                    </span>
                </Link>

            </div>

        </div>
      </main>
    </div>
  );
}
